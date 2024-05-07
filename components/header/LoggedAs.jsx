"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { LogOut } from "lucide-react";

import { useRouter } from "next/navigation";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function LoggedAs() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex gap-2 items-center">
      <p className="text-text-secondary">Logged in as</p>
      <Popover>
        <PopoverTrigger asChild>
          <div className="relative after:absolute after:bottom-0 after:block after:h-[1px] after:w-0 after:bg-text-primary after:transition-all after:duration-150 after:ease-out after:content-[''] hover:after:left-0 hover:after:w-full group-hover:after:left-0 group-hover:after:w-full cursor-pointer">
            <p className="text-text-primary">{session?.user?.username}</p>
          </div>
        </PopoverTrigger>
        <PopoverContent
          align={"end"}
          className="rounded-xl w-fit bg-background-secondary border-background"
        >
          <button
            onClick={() => {
              signOut();
              router.push("/login");
            }}
            className="text-text-primary flex gap-1 justify-end items-center outline-none"
          >
            <LogOut />
            <p className="text-text-primary">Log out</p>
          </button>
        </PopoverContent>
      </Popover>
    </div>
  );
}
