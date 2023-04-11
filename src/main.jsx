import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AplliedJobs/AppliedJobs';
import Blog from './Components/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: async () => {
          const categoriesResponse = await fetch("categories.json");
          const categoriesData = await categoriesResponse.json();

          const jobsResponse = await fetch("jobs.json");
          const jobsData = await jobsResponse.json();

          return { fetchedCategories: categoriesData, fetchedJobs: jobsData };
        },
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/applied-jobs",
        element: <AppliedJobs />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
