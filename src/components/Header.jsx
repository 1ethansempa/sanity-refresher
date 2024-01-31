import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">Youtube Blog</Link>
      </div>

      <nav>
        <ul>
          <li>
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
