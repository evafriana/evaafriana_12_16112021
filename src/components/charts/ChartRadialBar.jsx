import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from "recharts";
import PropTypes from "prop-types";

const COLORS = ["#E60000", "#fff"];

const ChartRadialBar = ({ userScore = 0 }) => {
  const data = [
    {
      value: userScore,
    },
    { value: 1 - userScore },
  ];

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
            fill="#8884d8"
            dataKey="value"
            // label={renderCustomizedLabel}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
                cornerRadius="50%"
              />
            ))}

            <Label width={30} position="center">
              {`${userScore * 100}% de votre objective`}
            </Label>
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

ChartRadialBar.propTypes = {
  data: PropTypes.array.isRequired,
  userScore: PropTypes.number,
};

export default ChartRadialBar;
