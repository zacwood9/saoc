import { redirect } from "next/navigation";
import { getSession } from "./actions";
import { SignInForm } from "./sign-in-form";

export default async function SignInPage() {
  const isAuthenticated = await getSession();

  if (isAuthenticated) {
    redirect("/admin");
  }

  return (
    <div className="max-w-2xl">
      <SignInForm />
    </div>
  );
}
