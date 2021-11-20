import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function ChartRadialBar() {
  return (
    <div className="chartradialbar">
      <p>Score</p>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="10%"
          outerRadius="80%"
          barSize={10}
        >
          <RadialBar
            minAngle={15}
            background
            clockWise
            dataKey="uv"
            fill="#ff0000"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}
