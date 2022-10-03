import React from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Lessons from "../components/Lessons";
import CreateLesson from "../components/createLesson";

const LessonsPage = ({lessons, error }) => {
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
    "https://pwufnt-1337.preview.csb.app/api/courses"
  );
  const lessons = res.data;
  return { props: { lessons } };
}

export default LessonsPage;
