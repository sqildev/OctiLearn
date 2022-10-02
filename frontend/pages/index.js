import React from "react";
import axios from "axios";
import Courses from "../components/courses";

const Home = ({ courses, error }) => {
  return <Courses courses={courses} />;
};

export async function getServerSideProps(ctx) {
  const res = await axios.get("http://localhost:1337/api/courses");
  const courses = res.data;
  return { props: { courses } };
}

export default Home;
