"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/database";
import bcrypt from "bcryptjs";

export async function getSession() {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("session_token");
  return sessionToken?.value;
}

export async function signIn(email: string, password: string) {
  try {
    // Find user by email
    const user = await db
      .selectFrom("users")
      .select(["id", "passwordDigest"])
      .where("email", "=", email)
      .executeTakeFirst();

    if (!user) {
      return { error: "Invalid email or password" };
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordDigest);
    if (!isValidPassword) {
      return { error: "Invalid email or password" };
    }

    // Set the session token cookie
    const cookieStore = await cookies();
    cookieStore.set("session_token", user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    return { success: true };
  } catch (error) {
    console.error("Sign in error:", error);
    return { error: "An unexpected error occurred" };
  }
}

export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete("session_token");
  redirect("/admin/sign-in");
}
