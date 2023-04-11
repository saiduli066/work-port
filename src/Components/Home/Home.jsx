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
        <div className="mt-16">
          <div className="text-center ">
            <h1 className="font-semibold mb-5">Job Category List</h1>
            <p>
              Explore thousands of job opportunities with all the information
              you need. Its your future
            </p>
          </div>
          <div className="flex justify-evenly mx-auto mt-8">
            {categories.map((category, index) => (
              <div className="w-[20%]  p-9 rounded-lg bg-gray-50" key={index}>
                <img
                  className="w-16 bg-gray-100 p-2 rounded-lg"
                  src={category.icon}
                  alt=""
                />
                <h4 className="font-semibold">{category.name}</h4>
                <p>{category.jobs_available}</p>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default Home;