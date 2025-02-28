import { Database } from "bun:sqlite";

const db = new Database("db/database.sqlite3");
db.exec("PRAGMA journal_mode = WAL;");
export { db };
