import Bookmark from "@/components/main/Bookmark";
import { Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Header from "@/components/header/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-24">
        <div className="flex gap-3 px-24">
          <Input type="text" placeholder="Search" />
          <Button className="flex justify-center items-center py-2 px-4">
            Search
          </Button>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-between w-full items-center">
            <h4 className="text-text-secondary">Bookmarks</h4>
            <button className="text-text-secondary flex gap-1 justify-end items-center">
              <Download />
              <h4 className="text-text-secondary">Import</h4>
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center w-full gap-5">
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
            <Bookmark />
          </div>
        </div>
      </main>
    </>
  );
}
