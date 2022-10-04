import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <div className="z-50 shadow-lg fixed top-0 right-0 left-0 px-4 py-2.5 bg-gray-800 text-white flex justify-between align-center">
      <Link href="/">
        <button className="text-xl">
          <a>OctiLearn</a>
        </button>
      </Link>
      <div className="flex items-center">
        <Link href="/lessons">
          <button className="ml-8">
            <a>Lessons</a>
          </button>
        </Link>
        <Link href="/about">
          <button className="ml-8">
            <a>About</a>
          </button>
        </Link>
        <Link href="/login">
          <button className="ml-8 bg-blue-600 py-1 px-6 rounded-md">
            <a>Login</a>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
