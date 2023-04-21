import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const [showNavbar, setShowNavbar] = useState(false);
  
  const [isActive, setIsActive] = useState(false);

  const handleNavActivity = () => {
    setIsActive(true);
  }

  
  return (
    <nav className="flex flex-col lg:flex-row items-center lg:justify-around justify-between  bg-gray-50 px-4 py-3">
      <Link to="/">
        <h2 className="lg:text-4xl text-3xl mt-3 mb-3">WorkPort</h2>
      </Link>
      <button
        className="block lg:hidden my-button"
        onClick={() => setShowNavbar(!showNavbar)}
      >
        =
      </button>
      <div
        className={`w-full block flex-grow md:flex md:items-center md:w-auto ${
          showNavbar ? "flex" : "hidden"
        }`}
      >
        <ul className="lg:flex-grow lg:text-center lg:flex lg:justify-center">
          <NavLink
            to="/"
            onClick={handleNavActivity}
            className={`block mt-4 md:inline-block md:mt-0 md:mx-4 ${
              isActive ? "text-sky-600" : "text-gray-400"
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/statistics"
            onClick={handleNavActivity}
            className={`block mt-4 md:inline-block md:mt-0 md:mx-4 ${
              isActive ? "text-sky-600" : "text-gray-400"
            }`}
          >
            Statistics
          </NavLink>
          <NavLink
            to="/applied-jobs"
            onClick={handleNavActivity}
            className={`block mt-4 md:inline-block md:mt-0 md:mx-4 ${
              isActive ? "text-sky-600" : "text-gray-400"
            }`}
          >
            Applied Jobs
          </NavLink>
          <NavLink
            to="/blog"
            onClick={handleNavActivity}
            className={`block mt-4 md:inline-block md:mt-0 md:mx-4 ${
              isActive ? "text-sky-600" : "text-gray-400"
            }`}
          >
            Blog
          </NavLink>
        </ul>
      </div>
      <div className="mt-4 md:mt-0 md:ml-4">
        <button className="my-button w-full md:w-auto">Start Applying</button>
      </div>
    </nav>
  );
};

export default Header;
