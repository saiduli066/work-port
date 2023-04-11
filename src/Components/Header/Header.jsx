import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <nav className="flex justify-around mt-4 bg-gray-50 px-2 py-4 items-center ">
        <Link to="/">
          <h2 className="text-3xl">WorkPort</h2>
        </Link>
        <ul className="flex gap-3 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-sky-600" : "text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            c
            className={({ isActive }) =>
              isActive ? "text-sky-600" : "text-gray-400"
            }
          >
            Statistics
          </NavLink>
          <NavLink
            to="/applied-jobs"
            className={({ isActive }) =>
              isActive ? "text-sky-600" : "text-gray-400"
            }
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-sky-600" : "text-gray-400"
            }
          >
            Blog
          </NavLink>
        </ul>
        <div>
          <button className="my-button">Start Applying</button>
        </div>
      </nav>
    );
};

export default Header;