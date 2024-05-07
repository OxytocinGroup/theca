import Bookmark from "@/components/main/Bookmark";
import { Download } from "lucide-react";
import Header from "@/components/header/Header";
import LoggedAs from "@/components/main/LoggedAs";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-24">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between w-full items-center">
            <LoggedAs />

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
