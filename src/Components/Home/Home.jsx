import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../../assets/All Images/P3OLGJ1 copy 1.png";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Home = () => {
  // const {fetchedCategories,fetchedJobs} = useLoaderData();
  // const { categories } = fetchedCategories;
  // // console.log(categories);

  // const { jobs } = fetchedJobs;
  // console.log(jobs);
  const { fetchedCategories, fetchedJobs } = useLoaderData();
  const { categories } = fetchedCategories;
  console.log(categories);
  const { jobs } = fetchedJobs;
  console.log(jobs);

  const [showAllJobs, setShowAllJobs] = useState(false);

  const handleShowMore = () => {
    setShowAllJobs(true);
  };

  const displayedJobs = showAllJobs ? jobs : jobs.slice(0, 4);

  return (
    <>
      {/* banner  section*/}
     
      <div className="flex flex-col md:flex-row items-center p-5 justify-evenly bg-gray-50">
        <div className="md:w-[45%]">
          <h1 className="text-4xl md:text-6xl font-semibold w-full mb-6">
            One Step Closer To Your{" "}
            <span className="text-sky-400">Dream Job</span>
          </h1>
          <p className="text-center md:text-left mb-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="my-button w-full md:w-auto">Get Started</button>
        </div>
        <div>
          <img className="w-[20em] lg:w-[30em] max-w-full" src={logo} alt="" />
        </div>
      </div>

      {/* job categories */}
      
      <div className="mt-16">
        <div className="text-center ">
          <h1 className="font-semibold mb-5">Job Category List</h1>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex flex-col lg:justify-center gap-4 lg:flex-row mx-auto mt-8 p-4">
          {categories.map((category, index) => (
            <div
              className="w-full lg:w-[20%] p-9 rounded-lg bg-gray-50"
              key={index}
            >
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
          

      {/* featured jobs section */}


      <div class="px-4 py-8 md:py-16">
        <h1 class="font-semibold text-center text-2xl md:text-4xl mb-5">
          Featured Jobs
        </h1>
        <p class="text-center mb-10 md:mb-16">
          Explore thousands of job opportunities with all the information you
          need. It's your future.
        </p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-12 justify-items-center items-center mx-auto">
          {displayedJobs.map((job) => (
            <div
              class="mx-auto border w-full lg:w-[65%] border-gray-200 rounded-lg p-10"
              key={job.id}
            >
              <img
                class="w-28 h-16 mx-auto lg:mx-0"
                src={job.company_logo}
                alt=""
              />
              <h4 class="text-xl text-center lg:text-left mb-5">
                {job.job_title}
              </h4>
              <p class="font-medium text-gray-500 text-center md:text-left mb-5">
                {job.company_name}
              </p>
              <div class="flex flex-col lg:flex-row gap-5 mb-5">
                <button class="border-sky-300 flex-grow">
                  {job.remote_or_onsite}
                </button>
                <button class="border-sky-300 flex-grow mt-3 md:mt-0">
                  {job.fulltime_or_parttime}
                </button>
              </div>
              <div class="flex flex-col md:flex-row gap-8 mb-8">
                <p class="flex items-center">
                  <MapPinIcon class="w-4 h-4" /> {job.location}
                </p>
                <p class="flex items-center">
                  <CurrencyDollarIcon class="w-4 h-4" /> {job.salary}
                </p>
              </div>
              <button class="my-button mx-auto lg:mx-0">View Details</button>
            </div>
          ))}
        </div>
        <div class="text-center mt-10">
          <button
            class={`${showAllJobs ? "hidden" : "my-button"}`}
            onClick={handleShowMore}
          >
            See All
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
