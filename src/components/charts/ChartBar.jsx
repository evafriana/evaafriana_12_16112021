import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Data from "../../service/Data.json";

export default function ChartBar() {
  return (
    <div className="chartbar">
      <div className="chartbar__text">
        <p>Activité quotidienne</p>
        <div className="chartbar__points">
          <p>Poids(kg)</p>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis orientation="right" axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="pv" fill="#282d30" radius={[50, 50, 0, 0]} />
          <Bar dataKey="uv" fill="#ff0000" radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
