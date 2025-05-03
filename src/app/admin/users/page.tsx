import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserForm } from "./user-form";
import { UsersTable } from "./users-table";
import { getUsers } from "./actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default async function AdminUsersPage() {
  const { success, users = [], error } = await getUsers();

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Users</h2>
        <p className="text-muted-foreground">
          Manage admin users for the website
        </p>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">User List</TabsTrigger>
          <TabsTrigger value="add">Add User</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Admin Users</CardTitle>
              <CardDescription>View and manage admin users</CardDescription>
            </CardHeader>
            <CardContent>
              {success ? (
                <UsersTable users={users} />
              ) : (
                <div className="text-center py-6 text-muted-foreground">
                  {error || "Failed to load users"}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="add">
          <Card>
            <CardHeader>
              <CardTitle>Add New User</CardTitle>
              <CardDescription>Create a new admin user account</CardDescription>
            </CardHeader>
            <CardContent>
              <UserForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
