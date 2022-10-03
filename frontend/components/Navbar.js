import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div className="z-50 shadow-md fixed top-0 right-0 left-0 px-4 py-2.5 bg-gray-800 text-white flex justify-between align-center">
      <div className="text-xl">
        <Link href="/">
          <a>OctiLearn</a>
        </Link>
      </div>
      <div className="flex items-center">
        <div className="ml-8">
          <Link href="/LessonsPage">
            <a>Lessons</a>
          </Link>
        </div>
        <div className="ml-8">
          <Link href="/">
            <a>About</a>
          </Link>
        </div>
        <div className="ml-8 bg-blue-600 py-1 px-6 rounded-md">
          <Link href="/auth">
            <a>Login</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;