import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import Data from "../../service/Data.json";

export default function ChartLine() {
  return (
    <div className="chartline">
      <p>Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
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
          <XAxis
            dataKey="name"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Line type="monotone" dataKey="pv" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
