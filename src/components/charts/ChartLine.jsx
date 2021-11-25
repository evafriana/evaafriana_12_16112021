import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }
  return null;
};

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
          <Tooltip content={<CustomTooltip />} />
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
  userAverageSessions: PropTypes.array,
};

export default ChartLine;
