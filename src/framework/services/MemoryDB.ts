import { DatabaseProvider } from '../Database';
import { clamp } from '../../utils/clamp';
import { writeFile, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

export class InMemoryDatabase extends DatabaseProvider {

  private tables = new Map<string, any[]>();
  private __data_dir: string = '.memorydb'

  async connect(o: any) {
    return true;
  }

  query<R>(q: string): R {
    const { select, from, where, take, index } = JSON.parse('{' + q + '}');
    const queryArgs = JSON.stringify({ select, from, where, take, index }, null, 2);

    if (!select || !from) {
      throw new Error("Query string error: " + queryArgs);
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
      rows = rows.filter(row => filterFunc(row[filterProp], filterCmp));
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
    return true;
  }

  createDatabase(name: string) {
    this.tables.set(name, []);
    return this;
  }

  saveDatabase(db: string) {
    if (this.tables.has(db)) {
      const rows = this.tables.get(db)
      const bits = JSON.stringify(rows)
      const path = join(this.__data_dir, db)

      if (!existsSync(this.__data_dir)) {
        mkdirSync(this.__data_dir)
      }

      writeFile(path, bits, (err) => {
        if (err) this.logger.error(`Couldn't write db: ${db}`)
      })
    }

    return this
  }
  async testConnection() {
    return true
  }
}
