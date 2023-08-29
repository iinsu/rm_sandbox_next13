"use client";

import { useState, useCallback } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./avatar";
import MenuItem from "./menuItem";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div className="hidden px-4 py-3 text-sm font-semibold transition rounded-full cursor-pointer md:block hover:bg-neutral-100">
          Sandbox
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src="" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute right-0 overflow-hidden text-sm bg-white shadow-md rounded-xl md:w-3/4 top-12">
          <>
            <MenuItem onClick={() => {}} label="Login" />
            <MenuItem onClick={() => {}} label="Sign up" />
          </>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
