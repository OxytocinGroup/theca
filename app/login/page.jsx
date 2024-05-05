import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex flex-col gap-8 w-full items-center justify-center">
      <h1 className="text-text-primary text-5xl">Welcome Back</h1>
      <LoginForm />
    </main>
  );
}
