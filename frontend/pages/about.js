import React, { useEffect } from "react";
import Layout from "../components/Layout";

import { useDispatch } from "react-redux";
import { changeUser } from "../state/userSlice";

function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(changeUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  return (
    <div className="z-0 flex min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-100 flex-col items-center py-20">
      <p className="pl=[10%]">
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      </p>
    </div>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;

/*
<h1 className="text-7xl pr-[70%]">Developers:</h1>
<h1 className="text-7xl">Artwork:</h1>
<h1 className="text-7xl pl-[70%]">Tutors:</h1>
  <ul className="text-lg pr-[80%]">
    <li className="-translate-y-[50%] translate-y-[100%]"><b>-Jayden Moore</b></li>
    <li className="translate-y-[100%]"><b>-Krish Kapoor</b></li>
    <li className="translate-y-[150%]"><b>-Krit Dass</b></li>
  </ul>
  <ul className="text-lg">
    <li className="pb-[100%] pt-[100%]"><b>-Dhillan Salh</b></li>
  </ul>
*/
