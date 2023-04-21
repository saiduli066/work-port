import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Statistics from "./Components/Statistics/Statistics";
import AppliedJobs from "./Components/AplliedJobs/AppliedJobs";
import Blog from "./Components/Blog/Blog";
import Error from "./Components/Error/Error";
import Details from "./Components/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const categoriesResponse = await fetch("/categories.json");
          const categoriesData = await categoriesResponse.json();

          const jobsResponse = await fetch("/jobs.json");
          const jobsData = await jobsResponse.json();

          return { fetchedCategories: categoriesData, fetchedJobs: jobsData };
        },
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/details/:jobId",
        element: <Details />,
        loader: async () => {
          const jobsResponse = await fetch("/jobs.json");
          const jobsData = await jobsResponse.json();

          return { fetchedJobs: jobsData };
        },
      },
      {
        path: "/*",
        element: <Error />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
