"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { PasswordInput } from "@/components/password-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";

const apiRegister = `/api/register`;
const apiLoginExists = `/api/loginExists`;
const apiEmailExists = `/api/emailExists`;

const schema = z.object({
  login: z
    .string({ message: "Please enter your login" })
    .min(3, "Login must be at least 3 characters"),
  email: z
    .string({ message: "Please enter your email address" })
    // .min(1, "Please enter your email address")
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ message: "Please enter your password" })
    .min(6, "Password must be at least 6 characters"),
});

export default function RegisterForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [emailError, setEmailError] = useState("");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      login: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async ({ ...data }) => {
    // e.preventDefault();

    try {
      const responses = await Promise.all([
        fetch(apiLoginExists, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
        fetch(apiEmailExists, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }),
      ]);

      const [loginExistsData, emailExistsData] = await Promise.all([
        responses[0].json(),
        responses[1].json(),
      ]);

      const { userLogin } = loginExistsData;
      const { userEmail } = emailExistsData;

      if (userLogin && userEmail) {
        setLoginError("Login already exists. Please login or try another one");
        setEmailError("Email already exists. Please login or try another one");
        return;
      } else if (userLogin) {
        setLoginError("Login already exists. Please login or try another one");
        return;
      } else if (userEmail) {
        setEmailError("Email already exists. Please login or try another one");
        return;
      }

      const res = await fetch(apiRegister, {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
        console.log(res);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="w-6/12 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-8 justify-center items-center"
        >
          <div className="flex flex-col gap-4 w-full">
            <FormField
              control={form.control}
              name="login"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormControl>
                    <Input placeholder="Login" {...field} />
                  </FormControl>
                  <FormMessage>{loginError}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage>{emailError}</FormMessage>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormControl>
                    <PasswordInput
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        field.onChange(e.target.value);
                      }}
                      autoComplete="new-password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <Button variant="default" className="dark w-fit" size="lg">
              Register
            </Button>
            <p className="text-text-secondary">
              Already have an account?{" "}
              <Link
                className="text-text-primary hover:underline transition-all"
                href="/login"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
