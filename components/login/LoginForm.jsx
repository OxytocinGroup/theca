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

const schema = z.object({
  email: z
    .string({ message: "Please enter your email address" })
    // .min(1, "Please enter your email address")
    .email({ message: "Please enter a valid email address" }),
  password: z
    .string({ message: "Please enter your password" })
    .min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const [password, setPassword] = useState("");
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async ({ ...data }) => (
    console.log("data", data), form.reset(), setPassword("")
  );

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
              name="email"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormControl>
                    <Input placeholder="Email" {...field} />
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
                  <FormMessage />
                  <FormDescription className="cursor-default text-sm text-muted-foreground">
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
          <Button variant="default" className="dark w-fit" size="lg">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
}
