import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { SignOutButton } from "./sign-out-button";
import { getSession } from "./sign-in/actions";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  return (
    <div className="flex min-h-screen flex-col">
      <Header isAdmin={!!session} />
      <main className="flex-1 container mx-auto max-w-7xl px-4 md:px-6 py-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
              Admin Dashboard
            </h1>
            {session && <SignOutButton />}
          </div>
          {children}
        </div>
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
