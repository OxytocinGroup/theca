"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
  const handleSearch = () => {
    const input = document.querySelector('input[type="text"]');
    if (input && input.value) {
      const query = encodeURIComponent(input.value);
      window.location.href = `https://google.com/search?q=${query}`;
    }
  };
  return (
    <div className="flex gap-3 px-24 w-1/2">
      <Input
        type="text"
        placeholder="Search"
        className="bg-background-secondary text-text-primary border-text-secondary"
      />
      <Button
        onClick={handleSearch}
        className="flex justify-center items-center p-2 bg-background-secondary text-text-primary border-text-secondary border-[1px]"
      >
        <Search />
      </Button>
    </div>
  );
};

export default SearchInput;
