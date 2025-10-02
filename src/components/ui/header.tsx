// components/Header.js
"use client"; // needed if you're in the /app directory

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-semibold text-gray-800">
        <Link href="/">Talent Token</Link>
      </div>

      {/* User Menu */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 focus:outline-none"
        >
          <img
            src="/user-avatar.png"
            alt="User Avatar"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="text-gray-700 font-medium">Daniel</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
            <Link
              href="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <button
              onClick={() => alert("Logout logic here")}
              className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
export { Header }
