import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Assignment 1", mark: 57 },
  { name: "Assignment 2", mark: 50 },
  { name: "Assignment 3", mark: 50 },
  { name: "Assignment 4", mark: 60 },
  { name: "Assignment 5", mark: 48 },
  { name: "Assignment 6", mark: 56 },
  { name: "Assignment 7", mark: 50 },
  { name: "Assignment 8", mark: 48 },
];

const Statistics = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      < ComposedChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="mark" barSize={30} fill="#413ea0" />
        <Line type="monotone" dataKey="mark" stroke="#ff7300" />
      </ ComposedChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
