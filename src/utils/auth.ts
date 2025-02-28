import type { Context } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { verifyUser } from "./userService";

// Session duration in seconds (24 hours)
const SESSION_DURATION = 60 * 60 * 24;

export async function authenticateUser(
  email: string,
  password: string
): Promise<boolean> {
  // Use the user service to verify credentials
  return verifyUser(email, password);
}

export function createSession(c: Context, email: string): void {
  // In a real application, you would:
  // 1. Generate a secure random token
  // 2. Store the token in a database with the user ID and expiration
  // 3. Set the token as an HTTP-only cookie

  // For this simple example, we'll just set the email as the session
  setCookie(c, "admin_session", email, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: SESSION_DURATION,
    path: "/",
  });
}

export function getSession(c: Context): string | undefined {
  return getCookie(c, "admin_session");
}

export function clearSession(c: Context): void {
  setCookie(c, "admin_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0,
    path: "/",
  });
}

export function requireAuth(c: Context): boolean {
  const session = getSession(c);
  return !!session; // Any valid session is allowed
}
