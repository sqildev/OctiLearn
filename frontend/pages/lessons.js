import React, { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Lessons from "../components/Lessons";
import CreateLesson from "../components/createLesson";

import { useDispatch } from "react-redux";
import { changeUser } from "../state/userSlice";

const LessonsPage = ({ lessons, error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(changeUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  const router = useRouter();
  const refreshData = () => router.replace(router.asPath);
  return (
    <div>
      <Lessons lessons={lessons} />
      <CreateLesson refreshData={refreshData} />
    </div>
  );
};

export async function getServerSideProps(ctx) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/courses`
  );
  const lessons = res.data;
  return { props: { lessons } };
}

export default LessonsPage;
