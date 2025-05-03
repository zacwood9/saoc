import type { Kysely } from "kysely";

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
  db.schema
    .createTable("users")
    .addColumn("id", "integer", (b) => b.primaryKey().notNull().autoIncrement())
    .addColumn("first_name", "text", (b) => b.notNull())
    .addColumn("last_name", "text", (b) => b.notNull())
    .addColumn("email", "text", (b) => b.notNull())
    .addColumn("password_digest", "text", (b) => b.notNull())
    .addColumn("created_at", "text", (b) => b.notNull())
    .addColumn("updated_at", "text", (b) => b.notNull())
    .execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
  db.schema.dropTable("users").execute();
}
