import React from "react";
import { getSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import Navbar from "../components/Navbar";

function auth() {
  return (
    <div>
      <Link href="/api/auth/signin">
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
          Sign In
        </button>
      </Link>
    </div>
  );
}

export default auth;
