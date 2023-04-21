import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import logo from "../../assets/All Images/Vector.png";
import {
  CurrencyDollarIcon,
  BriefcaseIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";

function Details() {
  const { jobId } = useParams();
  // console.log(jobId);

  const { fetchedJobs } = useLoaderData();
  const { jobs } = fetchedJobs;

  const job = jobs.find((job) => job.id == jobId);

  return (
    <div>
      <div className="flex  items-center relative bg-gray-50">
        <img className="" src={logo} alt="" />
        <h2 className="font-semibold text-4xl absolute left-[40%]">
          Job Details
        </h2>
      </div>

      <div className="flex p-8">
        <div className="w-[50%]">
          <h4 className="font-[700] text-[1em] text-gray-700 pb-2">
            Job Description:
          </h4>
          <p className=" font-normal pb-4 ">{job.job_description}</p>

          <h4 className="font-[700] text-[1em] text-gray-700 pb-2">
            Job Responsibility:
          </h4>
          <p className="font-normal pb-4 ">{job.job_responsibility}</p>

          <h4 className="font-[700] text-[1em] text-gray-700 pb-2">
            Educational Requirements:
          </h4>
          <p className="font-normal pb-4">{job.educational_requirements}</p>

          <h4 className="font-[700] text-[1em] text-gray-700 pb-2">
            Experiences:
          </h4>
          <p className="font-normal pb-4 ">{job.experiences}</p>
        </div>

        <div className="mx-auto">
          <div className="bg-purple-50 px-5 py-2  rounded-lg mb-4">
            {/*......... job details............. */}

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl border-b pb-4">
                Job Details
              </h3>
              <p className="flex items-center gap-1 font-[500] pt-4 text-gray-600">
                <CurrencyDollarIcon className="w-5 h-5 text-purple-400" />
                <span className="font-[600] text-[1em] text-gray-700">
                  Salary:
                </span>
                {job.salary}
              </p>
              <p className="flex items-center gap-1 font-[500]  text-gray-600">
                <BriefcaseIcon className="w-5 h-5 text-purple-400" />
                <span className="font-[600] text-[1em] text-gray-700">
                  Job title:
                </span>
                {job.job_title}
              </p>
            </div>

            {/*......... Contact Information ............. */}

            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-xl border-b pb-4 pt-6">
                Contact Information
              </h3>

              <p className="flex items-center gap-1 font-[500] pt-4 text-gray-500">
                <PhoneIcon className="w-5 h-5 text-purple-400" />
                <span className="font-[600] text-[1em] text-gray-700">
                  Phone:
                </span>
                {job.contact_information.phone}
              </p>
              <p className="flex items-center gap-1 font-[500] text-gray-500">
                <EnvelopeIcon className="w-5 h-5 text-purple-400" />
                <span className="font-[600] text-[1em] text-gray-700">
                  Email:
                </span>
                {job.contact_information.email}
              </p>
              <p className="flex items-center gap-1 font-[500]  text-gray-500">
                <MapPinIcon className="w-5 h-5 text-purple-400" />
                <span className="font-[600] text-[1em] text-gray-700">
                  Address:
                </span>
                {job.location}
              </p>
            </div>
          </div>
          <div className="">
            <button
              onClick={() => {

                  let appliedJobs =
                    JSON.parse(localStorage.getItem("applied-jobs")) || [];

                  const isJobAlreadyApplied = appliedJobs.find(
                    (appliedJob) => appliedJob.id === job.id
                  );

                  if (!isJobAlreadyApplied) {
                    appliedJobs.push(job);
                    localStorage.setItem(
                      "applied-jobs",
                      JSON.stringify(appliedJobs)
                    );
                  }

              }}
              className="my-button w-[100%]"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
