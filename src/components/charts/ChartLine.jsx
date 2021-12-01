import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";

/**
 * Generate user's average sessions chart
 * @param {Object} props Data of user average-sessions
 * @property {Array} userAverageSessions - Day and session length
 * @returns {JSX.Element}
 */

const ChartLine = (props) => {
  /**
   *
   * Create tooltip to display curve informations
   * See {@link https://recharts.org/en-US/examples/CustomContentOfTooltip}
   * @returns {JSX.Element}
   */
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

  return (
    <div className="chartline">
      <p className="chartline__text">Durée moyenne des sessions</p>
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
            fontSize="14px"
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

/**
 * CharLine component props
 */
ChartLine.propTypes = {
  userAverageSessions: PropTypes.array,
};

export default ChartLine;
