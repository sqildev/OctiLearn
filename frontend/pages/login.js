import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";

import { useDispatch } from "react-redux";
import { changeUser } from "../state/userSlice";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(changeUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });
  const [incorrectInfo, setIncorrectInfo] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/local`, {
        ...loginData,
      })
      .then((response) => {
        const { id, username, name, email, userRole } = response.data.user;
        const jwt = `Bearer ${response.data.jwt}`;
        localStorage.setItem(
          "user",
          JSON.stringify({
            id,
            username,
            name,
            email,
            userRole,
            jwt,
          })
        );
        dispatch(changeUser({ id, username, name, email, userRole, jwt }));
        setIncorrectInfo(false);
        setLoginData({
          identifier: "",
          password: "",
        });
        router.push("/");
      })
      .catch((err) => setIncorrectInfo(true));
  };

  return (
    <div className="mt-72">
      <form onSubmit={login}>
        <input
          type="text"
          name="identifier"
          required
          placeholder="Username or Email"
          value={loginData.identifier}
          onChange={updateLoginData}
        />
        <br />
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          required
          placeholder="Password"
          value={loginData.password}
          onChange={updateLoginData}
        />
        <i
          onClick={() => setShowPassword((prev) => !prev)}
          className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
          style={{ cursor: "pointer" }}
        ></i>
        <br />
        <input type="submit" value="Login" />
      </form>
      <Link href="/signup">
        <a>Don't have an account? Sign up.</a>
      </Link>
      {incorrectInfo && <p>Your username/email or password is incorrect.</p>}
    </div>
  );
}
