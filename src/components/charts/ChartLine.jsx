import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const ChartLine = (props) => {
  return (
    <div className="chartline">
      <p className="chartLine__text">Durée moyenne des sessions</p>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={props.userAverageSessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="#fbfbfb"
          />
          <Tooltip
            itemStyle={{ color: "#E60000" }}
            formatter={function (value) {
              return `${value} min`;
            }}
            labelFormatter={function (value) {
              return ``;
            }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#fbfbfb"
            dot={{
              r: 0,
              fill: "",
            }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

ChartLine.propTypes = {
  userActivity: PropTypes.object,
};

export default ChartLine;
