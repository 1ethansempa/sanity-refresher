import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-between bg-black text-white p-5">
      <div className="logo">
        <Link to="/">
          <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
            Youtube Blog
          </h2>
        </Link>
      </div>

      <nav>
        <ul className="flex lg:text-lg">
          <li className="mr-5 ">
            <button>
              <Link to="/">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/blog">Blog</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
