import React from "react";
import Image from 'next/image'
import Link from "next/link";
import octopus from '../assets/octopus.png'

const Home = () => {
  return(
    <div className="z-0 flex min-h-screen bg-gradient-to-b from-indigo-400 to-indigo-800 flex-col items-center py-32">
      <Image 
        src={octopus}
        layout="fixed"
        width={128}
        height={128}
      />
      {/*<a href="https://www.flaticon.com/free-icons/octopus" title="octopus icons">Octopus icons created by Flat Icons - Flaticon</a>*/}
      <div className="text-white text-5xl text-center p-8 font-bold leading-tight">
        Specialized Coding Lessons<br/>For You
      </div>
      <div className="mt-8 py-2.5 bg-violet-50 px-8 rounded-md">
        <Link href="/auth">
          <a className="font-semibold">Get Started</a>
        </Link>
      </div>
    </div>
  )
};

export default Home;
