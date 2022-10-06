import React, { useState, useEffect } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { changeUser } from "../state/userSlice";

export default function Signup() {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(changeUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  const [signupData, setSignupData] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    userRole: "student",
  });
  const [signupFailed, setSignupFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const updateSignupData = (e) => {
    const { name, value } = e.target;
    setSignupData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const signup = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/local/register`, {
        ...signupData,
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
        setSignupFailed(false);
        setSignupData({
          username: "",
          name: "",
          email: "",
          password: "",
          userRole: "student",
        });
        router.push("/");
      })
      .catch((err) => {
        setSignupFailed(true);
      });
  };

  return (
    <div className="mt-72">
      <form onSubmit={signup}>
        <input
          name="username"
          value={signupData.username}
          onChange={updateSignupData}
          required
          type="text"
          placeholder="Username"
        />
        <br />
        <input
          name="name"
          value={signupData.name}
          onChange={updateSignupData}
          required
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          name="email"
          value={signupData.email}
          onChange={updateSignupData}
          required
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          name="password"
          value={signupData.password}
          onChange={updateSignupData}
          required
          minLength="6"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <i
          onClick={() => setShowPassword((prev) => !prev)}
          className={`fa-solid ${showPassword ? "fa-eye" : "fa-eye-slash"}`}
          style={{ cursor: "pointer" }}
        ></i>
        <br />
        <select
          name="userRole"
          value={signupData.userRole}
          required
          onChange={updateSignupData}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <br />
        <input type="submit" value="Sign Up" />
        {signupFailed && <p>Sign-up failed.</p>}
      </form>
    </div>
  );
}
