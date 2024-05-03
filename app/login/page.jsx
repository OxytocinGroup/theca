import LoginForm from "@/components/login/LoginForm";
const page = () => {
  return (
    <main className="flex flex-col gap-8 px-[300px] min-h-screen items-center justify-center">
      <h1 className="text-text-primary text-5xl">Welcome To Theca</h1>
      {/* <h1>hello world</h1> */}
      <LoginForm />
    </main>
  );
};
export default page;
