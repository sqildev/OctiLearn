import React from "react";
import axios from "axios";

export default function Login() {
  const [loginData, setLoginData] = React.useState({
    identifier: "",
    password: "",
  });
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const updateLoginData = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const login = () => {
    axios
      .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/local`, {
        ...loginData,
      })
      .then((response) => {
        response.data.user ? setIsLoggedIn(true) : setIsLoggedIn(false);
        console.log(response.data.user)
      })
      .catch((error) => {
        setIsLoggedIn(false);
      });
  };

  return (
    <div className="mt-72">
      <input
        type="text"
        name="identifier"
        placeholder="Username or Email"
        value={loginData.identifier}
        onChange={updateLoginData}
      />
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={loginData.password}
        onChange={updateLoginData}
      />
      <br />
      <button onClick={login}>Login</button>
      {isLoggedIn ? <p>You are logged in.</p> : <p>You are not logged in.</p>}
    </div>
  );
}
