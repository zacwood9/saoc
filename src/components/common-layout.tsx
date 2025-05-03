import { Footer } from "./footer";
import { Header } from "./header";
import { getSession } from "@/app/admin/sign-in/actions";
export default async function CommonLayout({
  ...props
}: React.ComponentProps<"div">) {
  const session = await getSession();
  return (
    <div className="flex min-h-screen flex-col">
      <Header isAdmin={!!session} />
      <main className="flex-1" {...props} />
      <Footer />
    </div>
  );
}
