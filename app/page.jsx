import Bookmark from "@/components/main/Bookmark";
import { Download, Plus } from "lucide-react";
import Header from "@/components/header/Header";
import SearchInput from "@/components/header/SearchInput";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 items-center">
        <SearchInput />
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-center w-full gap-4">
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Button className="group h-auto p-[14px] rounded-2xl bg-background-secondary">
              <Plus className="text-text-secondary group-hover:text-text-primary transition-all" />
            </Button>
            <Button className="group h-auto p-[14px] rounded-2xl bg-background-secondary">
              <Download className="text-text-secondary group-hover:text-text-primary transition-all" />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
