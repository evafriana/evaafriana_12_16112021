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

/**
 *
 * @param {Object} props Data of user activity
 * @property {Array} userActivity - day, kilogram, calories
 * @returns {JSX.Element}
 */
const ChartBar = (props) => {
  /**
   *
   * See {@link https://recharts.org/en-US/examples/CustomContentOfTooltip}
   * @returns {JSX.Element}
   */
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${payload[0].value} kg`}</p>
          <p className="label">{`${payload[1].value} kCal`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="chartbar">
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
      <ResponsiveContainer width="100%" height="83%">
        <BarChart
          width={500}
          height={300}
          data={props.userActivity}
          margin={{
            top: 5,
            left: 20,
            bottom: 3,
          }}
          barCategoryGap={50}
          barGap={5}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, fill: "#74798c" }}
            dy={15}
          />
          <YAxis
            dataKey="calories"
            yAxisId="left"
            orientation="right"
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
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="kilogram" fill="#282d30" radius={[50, 50, 0, 0]} />
          <Bar dataKey="calories" fill="#E60000" radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * ChartBar component props
 */
ChartBar.propTypes = {
  userActivity: PropTypes.array,
};

export default ChartBar;
