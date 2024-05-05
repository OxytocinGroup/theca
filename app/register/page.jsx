import RegisterForm from "@/components/register/RegisterForm";

export default function RegisterPage() {
  return (
    <main className="flex flex-col gap-8 px-[300px] min-h-screen items-center justify-center">
      <h1 className="text-text-primary text-5xl">Welcome To Theca</h1>
      <RegisterForm />
    </main>
  );
}
