import Bookmark from "@/components/main/Bookmark";
import { Download } from "lucide-react";
import Header from "@/components/header/Header";
import SearchInput from "@/components/header/SearchInput";
import { Button } from "@/components/ui/button";

import CreateBookmark from "@/components/main/CreateBookmark";
import BookmarkSet from "@/components/main/BookmarkSet";

import { Suspense } from "react";

import Loading from "@/app/loading";

export default async function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 items-center">
        <SearchInput />
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-center w-full gap-4 max-h-[550px] overflow-y-scroll">
            <Suspense fallback={<Loading />}>
              <BookmarkSet />
            </Suspense>
            <CreateBookmark />

            <Button className="group h-auto p-[14px] rounded-2xl bg-background-secondary">
              <Download className="text-text-secondary group-hover:text-text-primary transition-all" />
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
