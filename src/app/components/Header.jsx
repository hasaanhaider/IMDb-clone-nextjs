// src/app/components/Header.jsx
"use client";
import MenuItem from "./MenuItem";
import { IoMdHome } from "react-icons/io";
import { IoInformationCircleOutline } from "react-icons/io5";
import Link from "next/link";
import { DarkModeSwitch } from "./DarkModeSwitch";

// Add this if you need client-side features

const Header = () => {
  return (
    <div className="flex justify-between items-center mx-2 max-w-6xl sm:mx-auto py-6">
      <div className="flex ">
        <MenuItem title="HOME" address="/" Icon={IoMdHome} />
        <MenuItem
          title="ABOUT"
          address="/about"
          Icon={IoInformationCircleOutline}
        />
      </div>
      <div className="flex items-center  space-x-4">
        <DarkModeSwitch  />
        <Link href="/">
          <h2 className="text-3xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDb
            </span>
            <span className="text-xl hidden sm:inline">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
