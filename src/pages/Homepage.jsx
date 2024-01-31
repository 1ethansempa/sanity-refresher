import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center text-center h-screen">
        <h1 className="uppercase font-bold tracking-wide lg:text-8xl md:text-6xl text-4xl mb-5">
          Youtube Blog
        </h1>
        <button className="py-2 px-6 shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black">
          <Link to="/blog">Read my blog</Link>
        </button>
      </section>
    </div>
  );
}

export default Homepage;
