import React from "react";
import axios from "axios";
import Courses from "../components/courses";

const Home = ({ courses, error }) => {
  return <Courses courses={courses} />;
};

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("http://localhost:1337/api/articles");
    const courses = res.data;
    return { courses };
  } catch (error) {
    return { error };
  }
};

export default Home;
