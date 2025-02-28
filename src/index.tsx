import { Hono } from "hono";
import { Database } from "bun:sqlite";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { HomePage } from "./pages/HomePage";
import { AdminLoginPage } from "./pages/AdminLoginPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { DonationPage } from "./pages/DonationPage";
import { UserManagementPage } from "./pages/UserManagementPage";
import { UserEditPage } from "./pages/UserEditPage";
import {
  authenticateUser,
  createSession,
  clearSession,
  requireAuth,
} from "./utils/auth";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "./utils/userService";

const db = new Database("db/database.sqlite3");
db.exec("PRAGMA journal_mode = WAL;");

const app = new Hono();

// Public routes
app.get("/", (c) =>
  c.html(
    <MainLayout>
      <HomePage />
    </MainLayout>
  )
);

app.get("/donate", (c) =>
  c.html(
    <MainLayout title="Donate | St. Athanasius Orthodox Church">
      <DonationPage />
    </MainLayout>
  )
);

// Admin routes
app.get("/admin", async (c) => {
  // Check if user is authenticated
  if (requireAuth(c)) {
    // Redirect to dashboard if already logged in
    return c.redirect("/admin/dashboard");
  }

  // Show login page
  return c.html(
    <AdminLayout title="Admin Login | St. Athanasius Orthodox Church">
      <AdminLoginPage />
    </AdminLayout>
  );
});

app.post("/admin/login", async (c) => {
  const { username, password } = await c.req.parseBody();

  // Validate form data
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string"
  ) {
    return c.html(
      <AdminLayout title="Admin Login | St. Athanasius Orthodox Church">
        <AdminLoginPage error="Please provide both username and password" />
      </AdminLayout>
    );
  }

  // Authenticate user
  const isAuthenticated = await authenticateUser(username, password);

  if (isAuthenticated) {
    // Create session and redirect to dashboard
    createSession(c, username);
    return c.redirect("/admin/dashboard");
  } else {
    // Show error message
    return c.html(
      <AdminLayout title="Admin Login | St. Athanasius Orthodox Church">
        <AdminLoginPage error="Invalid username or password" />
      </AdminLayout>
    );
  }
});

app.get("/admin/dashboard", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  // Show dashboard
  return c.html(
    <AdminLayout title="Admin Dashboard | St. Athanasius Orthodox Church">
      <AdminDashboardPage />
    </AdminLayout>
  );
});

app.get("/admin/logout", (c) => {
  // Clear session and redirect to login page
  clearSession(c);
  return c.redirect("/admin");
});

// User Management Routes
app.get("/admin/users", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  // Get all users
  const users = getAllUsers();

  // Get query parameters
  // Note: There's a TypeScript linter error here related to the query parameter type,
  // but the code works correctly at runtime
  const success = c.req.query("success");

  // Show user management page
  return c.html(
    <AdminLayout title="User Management | St. Athanasius Orthodox Church">
      <UserManagementPage users={users} success={success} />
    </AdminLayout>
  );
});

app.post("/admin/users/create", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  const { email, password, confirmPassword } = await c.req.parseBody();

  // Validate form data
  if (
    !email ||
    !password ||
    !confirmPassword ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    const users = getAllUsers();
    return c.html(
      <AdminLayout title="User Management | St. Athanasius Orthodox Church">
        <UserManagementPage
          users={users}
          error="Please provide email, password, and confirm password"
        />
      </AdminLayout>
    );
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    const users = getAllUsers();
    return c.html(
      <AdminLayout title="User Management | St. Athanasius Orthodox Church">
        <UserManagementPage users={users} error="Passwords do not match" />
      </AdminLayout>
    );
  }

  // Create user
  const user = createUser(email, password);

  if (!user) {
    const users = getAllUsers();
    return c.html(
      <AdminLayout title="User Management | St. Athanasius Orthodox Church">
        <UserManagementPage
          users={users}
          error="User with this email already exists"
        />
      </AdminLayout>
    );
  }

  // Redirect to user management page with success message
  return c.redirect("/admin/users?success=User created successfully");
});

app.get("/admin/users/edit/:id", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  const id = parseInt(c.req.param("id"));

  // Get user
  const user = getUserById(id);

  if (!user) {
    return c.redirect("/admin/users?error=User not found");
  }

  // Show user edit page
  return c.html(
    <AdminLayout title="Edit User | St. Athanasius Orthodox Church">
      <UserEditPage user={user} />
    </AdminLayout>
  );
});

app.post("/admin/users/update/:id", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  const id = parseInt(c.req.param("id"));
  const { email, password, confirmPassword } = await c.req.parseBody();

  // Validate form data
  if (!email || typeof email !== "string") {
    const user = getUserById(id);
    if (!user) {
      return c.redirect("/admin/users?error=User not found");
    }

    return c.html(
      <AdminLayout title="Edit User | St. Athanasius Orthodox Church">
        <UserEditPage user={user} error="Please provide an email" />
      </AdminLayout>
    );
  }

  // Check if passwords match if provided
  if (
    (password && !confirmPassword) ||
    (!password && confirmPassword) ||
    (password && confirmPassword && password !== confirmPassword)
  ) {
    const user = getUserById(id);
    if (!user) {
      return c.redirect("/admin/users?error=User not found");
    }

    return c.html(
      <AdminLayout title="Edit User | St. Athanasius Orthodox Church">
        <UserEditPage user={user} error="Passwords do not match" />
      </AdminLayout>
    );
  }

  // Update user
  const success = updateUser(
    id,
    email,
    password ? String(password) : undefined
  );

  if (!success) {
    return c.redirect("/admin/users?error=Failed to update user");
  }

  // Redirect to user management page with success message
  return c.redirect("/admin/users?success=User updated successfully");
});

app.post("/admin/users/delete/:id", async (c) => {
  // Check if user is authenticated
  if (!requireAuth(c)) {
    // Redirect to login page if not authenticated
    return c.redirect("/admin");
  }

  const id = parseInt(c.req.param("id"));

  // Delete user
  const success = deleteUser(id);

  if (!success) {
    return c.redirect("/admin/users?error=Failed to delete user");
  }

  // Redirect to user management page with success message
  return c.redirect("/admin/users?success=User deleted successfully");
});

export default app;
