import React from 'react';
import { useLoaderData } from 'react-router-dom';
import logo from '../../assets/All Images/P3OLGJ1 copy 1.png';

const Home = () => {
    const fetchedCategories = useLoaderData();
    const { categories } = fetchedCategories;
    // console.log(categories);

    return (
      <>
        {/* banner  section*/}
        <div className="flex items-center p-5  justify-evenly bg-gray-50">
          <div className="w-[45%] ">
            <h1 className="text-6xl font-semibold w-[62%] mb-6">
              One Step Closer To Your{" "}
              <span className="text-sky-400"> Dream Job</span>
            </h1>
            <p className="mb-6">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="my-button">Get Started</button>
          </div>
          <div>
            <img className="w-[30em]" src={logo} alt="" />
          </div>
        </div>

        {/* job categories */}
      
      </>
    );
};

export default Home;