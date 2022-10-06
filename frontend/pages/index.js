import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";

//Images
import octopus from "../assets/octopus.png";
import teacher from "../assets/teacher.png";
import course from "../assets/course.png";

// state
import { useDispatch, useSelector } from "react-redux";
import { changeUser, selectUser } from "../state/userSlice";

const Home = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      dispatch(changeUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-indigo-300 to-indigo-100">
      <div className="w-5/6 m-auto z-0 flex flex-col items-center py-24">
        {/*Introduction*/}
        <Image src={octopus} layout="fixed" width={216} height={216} />
        {/*<a href="https://www.flaticon.com/free-icons/octopus" title="octopus icons">Octopus icons created by Flat Icons - Flaticon</a>*/}
        <div className="text-gray-800 text-6xl text-center p-2 mt-8 font-bold leading-tight">
          Specialized Coding Lessons
          <br />
          For You
        </div>
        <Link href="/signup">
          <button className="mt-8 py-3 bg-blue-600 px-10 rounded-md">
            <a className="font-semibold text-white text-lg">Get Started</a>
          </button>
        </Link>

        {/*Description*/}
        <div className="py-4 mt-8 text-center text-xl font-semibold text-gray-800 leading-loose">
          We combine our favorite code teaching websites into a versitile
          environment designed for students.
          <br />
          OctiLearn was created as a website for Students by Students.
        </div>
      </div>

      {/*Process Teacher*/}
      {/* bg-indigo-400*/}
      <div className="bg-blend-lighten flex flex-col pb-32">
        <div className="text-gray-800 text-6xl text-center p-8 mt-24 mb-12 font-bold leading-tight">
          Starting with Teachers
        </div>
        <div className="flex flex-row justify-center items-center">
          <Image src={teacher} layout="fixed" width={216} height={216} />
          {/*<a href="https://www.flaticon.com/free-icons/teacher" title="teacher icons">Teacher icons created by Freepik - Flaticon</a>*/}
          <div className="ml-24">
            <a className="leading-loose text-gray-800 font-semibold">
              Teachers play an important role in the distribution of lessons to
              students.
              <br />
              Access is given to teachers enabling them to create lessons or use
              lessons
              <br />
              created by other teachers to make specialized courses designed for
              their
              <br />
              students. The issue of lessons being to generalized by the
              avaliable learning
              <br />
              tools is the focal point of OctiLearn.
            </a>
          </div>
        </div>
      </div>

      {/*Process Students*/}
      <div className="flex flex-col pb-32">
        <div className="text-gray-800 text-6xl text-center p-8 mt-24 mb-12 font-bold leading-tight">
          Diving into Courses
        </div>
        <div className="flex flex-row justify-center items-center">
          <div className="mr-24">
            <a className="leading-loose text-gray-800 font-semibold">
              Once a teacher has created a course, students can join their
              course by using
              <br />
              the code given to the teacher. Students are then allowed to
              progress through
              <br />
              the lessons specifically designed to best fit their needs. Lessons
              are presented
              <br />
              in a easy-to-digest manner with the focal point being teaching
              kids to code.
              <br />
              We use a variety of tools to create the best fit experience for
              students
              <br />
              at all skill levels and ages.
            </a>
          </div>
          <Image src={course} layout="fixed" width={216} height={216} />
          {/*<a href="https://www.flaticon.com/free-icons/course" title="course icons">Course icons created by Freepik - Flaticon</a>*/}
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
