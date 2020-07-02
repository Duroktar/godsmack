import type { LogLevel } from '../framework/services';

export interface IApplicationSettings {
  client: {
    endpoint: string;
  };
  commandline: {};
  container: {};
  controllers: {
    dirname: string;
    postfix: string;
  };
  database: {
    user: string;
    pass: string;
    port: number;
    host_port: number;
    host: string;
    name: string;
    dialect: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql";
  };
  docker: {
    image_tag_name: string;
    network_name: string;
    daemonize_app: boolean;
    db: {
      container_name: string;
      data_volume_dir: string;
      image_tag: string;
      host_expose_port: number;
    };
  }
  factory: {}
  httpServer: {
    port: number;
    host: string;
    https: boolean;
  }
  logger: {
    lvl: LogLevel;
  }
  mailer: {
    host: string
    port: number
    secure: boolean
    auth: {
      type: 'OAuth2';
      user: string;
    }
  }
  oauth2: {
    email: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    accessToken: string;
    expires: number;
    redirectEmail: string;
  }
  shell: {
    log: boolean;
  }
  startup: {}
  tasks: {
    dirname: string;
    postfix: string;
  }
}
