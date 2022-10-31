import React from "react";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { changeUser, selectUser } from "../state/userSlice";

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(
      changeUser({
        id: null,
        username: "",
        email: "",
        name: "",
        userRole: "",
        jwt: "",
        coursesEnrolled: [],
        coursesOwned: [],
      })
    );
  };

  return (
    <div className="z-50 shadow-lg fixed top-0 right-0 left-0 px-4 py-2.5 bg-gray-800 text-white flex justify-between align-center">
      <Link href="/">
        <button className="text-xl">
          <a>OctiLearn</a>
        </button>
      </Link>
      <div className="flex items-center">
        {user.id && (
          <Link href="/courses">
            <button className="ml-8">
              <a>Courses</a>
            </button>
          </Link>
        )}
        <Link href="/about">
          <button className="ml-8">
            <a>About</a>
          </button>
        </Link>
        {user.id ? (
          <button
            className="ml-8 bg-blue-600 py-1 px-6 rounded-md"
            onClick={logout}
          >
            <a>Log Out</a>
          </button>
        ) : (
          <Link href="/login">
            <button className="ml-8 bg-blue-600 py-1 px-6 rounded-md">
              <a>Login</a>
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
