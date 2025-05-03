"use server";

import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/database";
import { revalidatePath } from "next/cache";

const createUserSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

export type CreateUserFormData = z.infer<typeof createUserSchema>;

export async function createUser(formData: CreateUserFormData) {
  try {
    // Validate input
    const validatedData = createUserSchema.parse(formData);

    // Check if user already exists
    const existingUser = await db
      .selectFrom("users")
      .selectAll("users")
      .where("email", "=", validatedData.email)
      .executeTakeFirst();

    if (existingUser) {
      return {
        success: false,
        error: "User with this email already exists",
      };
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordDigest = await bcrypt.hash(validatedData.password, salt);

    // Create user
    await db
      .insertInto("users")
      .values({
        firstName: validatedData.firstName,
        lastName: validatedData.lastName,
        email: validatedData.email,
        passwordDigest: passwordDigest,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      .execute();

    // Revalidate the users page to show the new user
    revalidatePath("/admin/users");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error creating user:", error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        error: "Validation error",
        fieldErrors: error.flatten().fieldErrors,
      };
    }

    return {
      success: false,
      error: "Failed to create user",
    };
  }
}

export async function getUsers() {
  try {
    const users = await db
      .selectFrom("users")
      .selectAll("users")
      .orderBy("createdAt", "desc")
      .execute();

    return {
      success: true,
      users,
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      success: false,
      error: "Failed to fetch users",
    };
  }
}

export async function deleteUser(userId: number) {
  try {
    await db.deleteFrom("users").where("id", "=", userId).execute();

    // Revalidate the users page to update the table
    revalidatePath("/admin/users");

    return {
      success: true,
    };
  } catch (error) {
    console.error("Error deleting user:", error);
    return {
      success: false,
      error: "Failed to delete user",
    };
  }
}
