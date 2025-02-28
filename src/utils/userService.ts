import { Database } from "bun:sqlite";
import { createHash } from "crypto";
import { db } from "../db";

// User type definition
export type User = {
  id: number;
  email: string;
  createdAt: string;
  updatedAt: string;
};

// Hash password using SHA-256
// In a production app, use a more secure method like bcrypt
export function hashPassword(password: string): string {
  return Bun.password.hashSync(password);
}

// Get all users
export function getAllUsers(): User[] {
  const stmt = db.query(
    "SELECT id, email, createdAt, updatedAt FROM users ORDER BY id ASC"
  );
  return stmt.all() as User[];
}

// Get user by ID
export function getUserById(id: number): User | null {
  const stmt = db.query(
    "SELECT id, email, createdAt, updatedAt FROM users WHERE id = ?"
  );
  return stmt.get(id) as User | null;
}

// Get user by email
export function getUserByEmail(email: string): User | null {
  const stmt = db.query(
    "SELECT id, email, createdAt, updatedAt FROM users WHERE email = ?"
  );
  return stmt.get(email) as User | null;
}

// Create a new user
export function createUser(email: string, password: string): User | null {
  // Check if user already exists
  const existingUser = getUserByEmail(email);
  if (existingUser) {
    return null;
  }

  const passwordDigest = hashPassword(password);

  try {
    const stmt = db.query(
      "INSERT INTO users (email, passwordDigest) VALUES (?, ?) RETURNING id, email, createdAt, updatedAt"
    );
    return stmt.get(email, passwordDigest) as User;
  } catch (error) {
    console.error("Error creating user:", error);
    return null;
  }
}

// Update a user
export function updateUser(
  id: number,
  email: string,
  password?: string
): boolean {
  // Check if user exists
  const user = getUserById(id);
  if (!user) {
    return false;
  }

  try {
    if (password) {
      const passwordDigest = hashPassword(password);
      const stmt = db.query(
        "UPDATE users SET email = ?, passwordDigest = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
      );
      stmt.run(email, passwordDigest, id);
    } else {
      const stmt = db.query(
        "UPDATE users SET email = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?"
      );
      stmt.run(email, id);
    }
    return true;
  } catch (error) {
    console.error("Error updating user:", error);
    return false;
  }
}

// Delete a user
export function deleteUser(id: number): boolean {
  // Check if user exists
  const user = getUserById(id);
  if (!user) {
    return false;
  }

  try {
    const stmt = db.query("DELETE FROM users WHERE id = ?");
    stmt.run(id);
    return true;
  } catch (error) {
    console.error("Error deleting user:", error);
    return false;
  }
}

// Verify user credentials
export function verifyUser(email: string, password: string): boolean {
  const stmt = db.query("SELECT passwordDigest FROM users WHERE email = ?");
  const user = stmt.get(email) as { passwordDigest: string } | null;
  if (!user) {
    return false;
  }

  return Bun.password.verifySync(password, user.passwordDigest);
}
