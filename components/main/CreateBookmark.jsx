"use client";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useState } from "react";

import { useSession } from "next-auth/react";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Input } from "@/components/ui/input";

const apiCreateBookmark = `/api/bookmarks/createBookmark/`;

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const schema = z.object({
  title: z
    .string({ message: "Please enter bookmark title" })
    .min(2, "Title must be at least 2 characters"),
  url: z
    .string({ message: "Please enter bookmark URL" })
    .url({ message: "Please enter a valid url" }),
});

export default function CreateBookmark() {
  const { data: session } = useSession();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      url: "",
    },
  });

  const onSubmit = async ({ ...data }) => {
    const username = session?.user?.username;
    try {
      const res = await fetch(apiCreateBookmark, {
        method: "POST",
        body: JSON.stringify({ user: username, ...data }),
      });

      if (res.ok) {
        console.log("Bookmark created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="group h-auto p-[14px] rounded-2xl bg-background-secondary">
            <Plus className="text-text-secondary group-hover:text-text-primary transition-all" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <h3>Create Bookmark</h3>
            </DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-4 justify-center items-center"
            >
              <div className="flex flex-col gap-4 w-full">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormControl>
                        <Input placeholder="Bookmark title" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-1">
                      <FormControl>
                        <Input placeholder="URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                variant="default"
                className="rounded-2xl text-lg h-auto py-3"
                size="lg"
              >
                Create
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
