import React from "react";
import Image from "next/image";
import Link from "next/link";
import octopus from "../assets/octopus.png";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div className="z-0 flex min-h-screen bg-gradient-to-b from-indigo-300 to-indigo-100 flex-col items-center py-32">
      {/*Introduction*/}
      <Image src={octopus} layout="fixed" width={256} height={256} />
      {/*<a href="https://www.flaticon.com/free-icons/octopus" title="octopus icons">Octopus icons created by Flat Icons - Flaticon</a>*/}
      <div className="text-gray-800 text-8xl text-center p-8 mt-12 font-bold leading-tight">
        Specialized Coding Lessons<br />For You
      </div>
      <Link href="/signup">
        <button className="mt-8 py-2 bg-blue-600 px-10 rounded-md">
          <a className="font-semibold text-white text-lg">Get Started</a>
        </button>
      </Link>

      {/*Description*/}
      <div className="py-4 mt-12 text-center text-xl font-semibold text-gray-800 leading-loose">
        We combine our favorite code teaching websites into a versitile environment designed for students.<br/>
        OctiLearn is a website made for Teachers by Students.
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
