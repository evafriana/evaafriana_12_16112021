import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from "recharts";
import PropTypes from "prop-types";

/**
 * @type {string}
 */
const COLORS = ["#E60000", "#fff"];

/**
 *
 * @param {Object} props Data of user info today score
 * @property {Array} data - data
 * @returns {JSX.Element}
 *
 */
const ChartRadialBar = (props) => {
  const { userScore = 0 } = props;

  /**
   * @type {array<Object>}
   */
  const data = [
    {
      value: userScore,
    },
    { value: 1 - userScore },
  ];

  /**
   *
   * See {@link https://github.com/recharts/recharts/issues/160}
   * @returns {JSX.Element}
   */
  const CustomLabel = () => {
    return (
      <text x="32%" y="57%">
        <tspan fontSize="15" fill="#74798c">
          {"de votre objective"}
        </tspan>
      </text>
    );
  };

  return (
    <div className="chartradialbar" width="100%" height="100%">
      <p>Score </p>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={100}
            startAngle={90}
            endAngle={450}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cornerRadius="50%"
              />
            ))}

            <Label fontSize="40px" position="centerBottom">{`${
              userScore * 100
            }%`}</Label>
            <Label content={<CustomLabel />}></Label>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * ChartRadar component props
 */
ChartRadialBar.propTypes = {
  data: PropTypes.array,
  userScore: PropTypes.number,
};

export default ChartRadialBar;
