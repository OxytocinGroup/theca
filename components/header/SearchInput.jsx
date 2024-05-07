"use client";

import { useCallback, useEffect } from "react";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Google from "@/components/icons/google";

const SearchInput = () => {
  const handleSearch = () => {
    const input = document.querySelector('input[type="text"]');
    if (input && input.value) {
      const query = encodeURIComponent(input.value);
      window.location.href = `https://google.com/search?q=${query}`;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

    // Attach the event listener for "Enter" key press
    document.addEventListener("keydown", handleKeyPress);

    // Remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleSearch]);

  return (
    <div className="flex gap-4 px-24 w-full">
      <div className="flex justify-center items-center py-3 px-3.5 h-auto bg-background-secondary text-text-primary  border-none rounded-2xl">
        <Google />
      </div>
      <Input type="text" placeholder="Search" />
      <Button
        onClick={handleSearch}
        className="flex justify-center items-center py-3 px-3.5 h-auto bg-background-secondary text-text-secondary  border-none hover:text-text-primary rounded-2xl"
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchInput;
