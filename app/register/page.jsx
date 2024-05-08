import RegisterForm from "@/components/register/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function RegisterPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");
  return (
    <main className="flex flex-col gap-8 w-full h-full items-center justify-center">
      <h1 className="text-text-primary text-5xl">Welcome To Theca</h1>
      <RegisterForm />
    </main>
  );
}
