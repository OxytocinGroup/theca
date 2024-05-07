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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  username: z.string({ message: "Please enter your username" }),
  // email: z.string({ message: "Please enter your email address" }),
  // .min(1, "Please enter your email address")
  // .email({ message: "Please enter a valid email address" }),
  password: z.string({ message: "Please enter your password" }),
});

export default function LoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      // email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async ({ ...data }) => {
    // e.preventDefault();

    try {
      const res = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (res.error) {
        console.log(error);
        setError("Invalid Credentials");
        return;
      }

      router.replace("/");
    } catch (error) {
      console.log(error);
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
              name="username"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormControl>
                    <Input placeholder="Username or email" {...field} />
                  </FormControl>
                  <FormMessage />
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
                  <FormMessage>{error}</FormMessage>
                  <FormDescription className="mt-4">
                    Forgot Password?{" "}
                    <Link
                      href="/reset-password"
                      className="text-text-primary dark"
                    >
                      Reset
                    </Link>
                  </FormDescription>
                </FormItem>
              )}
            />
          </div>
          <div className="flex flex-col gap-4 items-center">
            <Button variant="default" className="w-fit" size="lg">
              Login
            </Button>
            <p className="text-text-secondary">
              Don&apos;t have an account?{" "}
              <Link
                className="text-text-primary hover:underline transition-all"
                href="/register"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
