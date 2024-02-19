import type { Adapter } from './adapter.js';
import { bunSqliteAdapter } from './internal/dialects/bun-sqlite.js';
import { libsqlAdapter } from './internal/dialects/libsql.js';
import { mysqlAdapter } from './internal/dialects/mysql.js';
import { postgresAdapter } from './internal/dialects/postgres.js';
import { sqliteAdapter } from './internal/dialects/sqlite.js';
import type { DialectName } from './types.js';

export const defaultAdapters: Record<DialectName, Adapter> = {
  'bun-sqlite': bunSqliteAdapter,
  libsql: libsqlAdapter,
  mysql: mysqlAdapter,
  postgres: postgresAdapter,
  sqlite: sqliteAdapter,
};

export const getAdapter = (
  dialect: DialectName,
  adapters = defaultAdapters,
) => {
  return adapters[dialect];
};