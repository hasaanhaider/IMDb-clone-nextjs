"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center px-5"
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-14 bg-transparent rounded-sm placeholder-gray-500 focus:outline-none px-4 flex-1"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button type="submit" className="text-amber-600 disabled:text-gray-400">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
