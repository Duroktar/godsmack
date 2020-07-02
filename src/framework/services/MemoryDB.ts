import { DatabaseProvider } from '../Database';
import { clamp } from '../../utils/clamp';
import { writeFile, existsSync, readFile } from 'fs';
import { Singleton } from '../../injector';

@Singleton()
export class InMemoryDatabase extends DatabaseProvider {
  private tables = new Map<string, any[]>();
  private __db_file: string = '.memorydb'
  private __connected: boolean = true
  private __writing: boolean = false
  private __loading: boolean = false

  async connect(o: any) {
    this.__connected = true;
  }

  query<R>(q: string): R {
    const { select, from: _from, where, take, index, delete: _delete } = JSON.parse('{' + q + '}');
    let from = _from

    const queryArgs = JSON.stringify({ select, from, where, take, index }, null, 2);

    if (select != null && from == null) {
      throw new Error("Query string error: " + queryArgs);
    }

    if (_delete != null) {
      from = _delete
    }

    if (!this.tables.has(from)) {
      throw new Error("Invalid query 'from': " + queryArgs);
    }

    let rows = this.tables.get(from) || [];

    if (where) {
      const lib: any = {
        '=': (a: any, b: any) => a === b,
        '<': (a: any, b: any) => a < b,
        '>': (a: any, b: any) => a > b,
        '<=': (a: any, b: any) => a <= b,
        '>=': (a: any, b: any) => a >= b,
      };

      // ex: { ... where: ['hat', '=', 5], }
      const filterProp = where[0];
      const filterFunc = lib[where[1]];
      const filterCmp = where[2];
      if (rows.length > 0 && typeof rows[0][filterProp] === 'undefined') {
        throw new Error("Invalid filterProp in 'where' stmt" + queryArgs);
      }

      if (_delete != null) {
        rows = rows.filter(row => !filterFunc(row[filterProp], filterCmp));
      } else {
        rows = rows.filter(row => filterFunc(row[filterProp], filterCmp));
      }
    }

    if (_delete) {
      this.tables.set(from, rows)
      return this.tables.get(from) as any as R
    }

    if (take) {
      const start = clamp(0, rows.length, index || 0);
      const end = clamp(start, rows.length, (index || 0) + take);
      rows = rows.slice(start, end);
    }

    if (select !== '*') {
      if (!Array.isArray(select)) {
        throw new Error('Error parsing select stmt: ' + queryArgs);
      }
      const existingKeys = Object.keys(rows[0] || {});
      select.forEach(key => {
        if (!existingKeys.includes(key)) {
          throw new Error("Select 'key' error: " + queryArgs);
        }
      });
      rows = rows.map(row => select.reduce((acc, key) => {
        acc[key] = row[key];
        return acc;
      }, {} as any)) as any;
    }

    return ((take === 1) ? rows[0] : rows) as any as R;
  }

  insert(table: string, data: any) {
    const queryArgs = JSON.stringify({ table, data });
    if (!table || !data) {
      throw new Error("Query string error: " + queryArgs);
    }
    if (!this.tables.has(table)) {
      throw new Error("Invalid 'table' in insert stmt: " + queryArgs);
    }
    this.tables.get(table)!.push(data);
    return this;
  }

  createDatabase(name: string) {
    this.tables.set(name, []);
    return this;
  }

  async saveDatabase(retries = 10) {
    if (retries <= 0) {
      throw new Error(`Database is already loading.`)
    }
    if (this.__loading) {
      throw new Error(`Database is busy loading.`)
    }
    if (this.__writing) {
      setTimeout(() => this.saveDatabase(retries - 1), 10)
    }
    const data = Object.fromEntries(this.tables.entries())
    const bits = JSON.stringify(data)
    this.__writing = true
    writeFile(this.__db_file, bits, this.onWriteFileComplete)
  }

  async loadDatabase() {
    if (!existsSync(this.__db_file)) {
      throw new Error(`Database not found: ${this.__db_file}`)
    }
    if (this.__loading) {
      throw new Error(`Database is already loading.`)
    }
    if (this.__writing) {
      throw new Error(`Database is busy saving.`)
    }
    this.__loading = true
    return new Promise((resolve, reject) => {
      readFile(this.__db_file, (...args) => {
        this.onReadFileComplete(...args)
        if (args[0]) reject(args[0])
        else resolve()
      })
    })
  }

  private onWriteFileComplete = (err: NodeJS.ErrnoException | null) => {
    if (err) this.logger.error(`Couldn't write db: ${this.__db_file}`);
    this.__writing = false
  };

  private onReadFileComplete = (err: NodeJS.ErrnoException | null, data: Buffer) => {
    if (err) throw new Error(`Error reading file: ${this.__db_file}`)
    const entries = Object.entries(JSON.parse(data + ''))
    for (let [key, table] of entries as [string, any[]][]) {
      this.tables.set(key, table)
    }
    this.__loading = false
  };

  async testConnection() {
    return this.__connected
  }
}
