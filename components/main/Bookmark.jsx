"use client";

import Link from "next/link";
import Image from "next/image";
import noImg from "/public/noImg.ico";

import { useToast } from "@/components/ui/use-toast";

import { PencilLine, Trash2, LinkIcon } from "lucide-react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const Bookmark = ({ href = "/", favicon = noImg, title = "Bookmark" }) => {
  const { toast } = useToast();
  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <Link
          href={href}
          className="flex gap-3 items-center px-4 py-3 rounded-2xl bg-background-secondary"
        >
          <Image src={favicon} alt="alt" width={24} height={24} />
          <p className="text-text-primary text-lg">{title}</p>
        </Link>
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>
          <PencilLine />
          Edit
        </ContextMenuItem>
        <ContextMenuItem
          onClick={() => {
            navigator.clipboard.writeText(href);
            toast({
              title: "Copied to clipboard",
            });
          }}
        >
          <LinkIcon />
          Copy URL
        </ContextMenuItem>
        <ContextMenuItem>
          <Trash2 />
          Delete
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Bookmark;
