"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function LoggedAs() {
  const { data: session } = useSession();
  // console.log(session);

  return (
    <div className="flex gap-1 items-center">
      <h4 className="text-text-secondary">Logged in as</h4>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative after:absolute after:bottom-0 after:block after:h-[1px] after:w-0 after:bg-text-primary after:transition-all after:duration-150 after:ease-out after:content-[''] hover:after:left-0 hover:after:w-1/5 group-hover:after:left-0 group-hover:after:w-1/5 cursor-pointer">
            <h4 className="text-text-primary">{session?.user?.email}</h4>
          </div>
        </PopoverTrigger>
        <PopoverContent
          side={"top"}
          className="rounded-xl w-fit bg-background-secondary border-background"
        >
          <button
            onClick={() => signOut()}
            className="text-text-primary flex gap-1 justify-end items-center"
          >
            <LogOut />
            <h4 className="text-text-primary">Log out</h4>
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
