import React, { useState } from "react";
import logo from "../../assets/All Images/Vector.png";
import {
  ArrowDownIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  //   let appliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));
  //     console.log(appliedJobs);

  const [sortOrder, setSortOrder] = useState("asc"); // initialize sort order to ascending


   /*********Please click apply now button first unless you will see this "{Unexpected Application Error!
 Cannot read properties of null(reading 'sort')
}" **********************************************************/
 
  let appliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));
  console.log(appliedJobs);

  // sort the applied jobs array based on id
  if (sortOrder === "asc") {
    appliedJobs.sort((a, b) => a.id - b.id);
  } else {
    appliedJobs.sort((a, b) => b.id - a.id);
  }

  return (
    <div className="relative">
      <div className="flex  items-center relative bg-gray-50">
        <img className="" src={logo} alt="" />
        <h2 className="font-semibold text-4xl absolute left-[40%]">
          Applied Jobs
        </h2>
      </div>
      <div className="absolute right-3 mt-5">
        {/* <button className="bg-gray-100  text-gray-600 font-[400] flex items-center gap-1">
          Filter by <ArrowDownIcon className="w-4 h-4" />
        </button> */}
        <button
          className="bg-gray-100  text-gray-600 font-[400] flex items-center gap-1"
          onClick={() => {
            if (sortOrder === "asc") {
              setSortOrder("desc");
            } else {
              setSortOrder("asc");
            }
          }}
        >
          Filter by <ArrowDownIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="p-2 mt-24 w-[75%] mx-auto">
        {appliedJobs.map((appliedJob) => (
          <div
            key={appliedJob.id}
            className="flex justify-between  items-center border-gray-200 border rounded-lg mb-4 px-2 py-1"
          >
            <div className="flex gap-5 ">
              <div className="bg-gray-100 p-3 w-32 h-32 my-auto inline-block ">
                <img className="w-28" src={appliedJob.company_logo} alt="" />
              </div>

              <div>
                <h3 className="font-[500] text-[1em] ">
                  {appliedJob.job_title}
                </h3>
                <h5 className="font-[500] text-gray-600 text-[15px] mb-1">
                  {appliedJob.company_name}
                </h5>
                <div className="flex gap-3 mb-1">
                  <div className="border-blue-300 border rounded-lg px-4 py-2 text-blue-600 font-[400]">
                    {appliedJob.remote_or_onsite}
                  </div>
                  <div className="border-blue-300 border rounded-lg px-4 py-2 text-blue-600 font-[400]">
                    {appliedJob.fulltime_or_parttime}
                  </div>
                </div>

                <div className="flex gap-3 ">
                  <p className="flex font-[500] items-center text-gray-600">
                    <MapPinIcon className="w-5 h-5 text-gray-500" />
                    {appliedJob.location}
                  </p>
                  <p className="flex font-[500] items-center text-gray-600">
                    <CurrencyDollarIcon className="w-5 h-5 text-gray-500" />
                    {appliedJob.salary}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Link to={`/details/${appliedJob.id}`}>
                <button className="my-button">view details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
