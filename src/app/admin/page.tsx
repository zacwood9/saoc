import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Users, Calendar, Settings } from "lucide-react";
import { SignInForm } from "./sign-in/sign-in-form";
import { getSession } from "./sign-in/actions";

export default async function AdminDashboard() {
  const session = await getSession();
  if (!session) {
    return (
      <div className="max-w-2xl">
        <SignInForm />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Manage your website content and settings
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/admin/users">
          <Card className="h-full hover:bg-muted/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <CardTitle>Users</CardTitle>
              </div>
              <CardDescription>
                Manage admin users and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Add, edit, or remove admin users who can access this dashboard.
              </p>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
