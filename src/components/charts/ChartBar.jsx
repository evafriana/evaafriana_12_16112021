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
import PropTypes from "prop-types";

const ChartBar = (props) => {
  return (
    <div className="chartbar">
      {
        <div className="chartbar__text">
          <p>Activité quotidienne</p>
          <div className="chartbar__points">
            <div className="kg">
              <span className="point"></span>
              <p>Poids (kg)</p>
            </div>
            <div className="cal">
              <span className="point"></span>
              <p>Calories brûlées (kCal)</p>
            </div>
          </div>
        </div>
      }
      {props.loading ? (
        <div>loading...</div>
      ) : props.error ? (
        <div>{props.error}</div>
      ) : (
        <ResponsiveContainer width="100%" height="83%">
          <BarChart
            width={500}
            height={300}
            data={props.userActivity}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 3,
            }}
            barCategoryGap={40}
            barGap={5}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey=""
              tickLine={false}
              tick={{ fontSize: 14, fill: "#74798c" }}
              dy={15}
            />
            <YAxis
              dataKey="kilogram"
              yAxisId="left"
              orientation="right"
              interval="number"
              allowDecimals={false}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 14, fill: "#74798c" }}
            />

            <YAxis
              dataKey="calories"
              orientation="right"
              axisLine={false}
              tickLine={false}
              hide={true}
            />
            <Tooltip
              wrapperStyle={{ backgroundColor: "red" }}
              itemStyle={{ color: "#ff0000" }}
              formatter={function (value) {
                return `${value}`;
              }}
              labelFormatter={function () {
                return ``;
              }}
            />
            <Bar dataKey="kilogram" fill="#282d30" radius={[50, 50, 0, 0]} />
            <Bar dataKey="calories" fill="#ff0000" radius={[50, 50, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

ChartBar.propTypes = {
  userActivity: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ChartBar;
