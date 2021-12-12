import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

/**
 *
 * Generate user's performances chart
 * @param {Object} props Data of user performance
 * @property {Array} data - data
 * @returns {JSX.Element}
 */
const ChartRadar = (props) => {
  const { userPerformance } = props;

  // transform data to an array of oject
  const data = userPerformance?.data.reduce((accumulateur, { value, kind }) => {
    const res = {
      subject: userPerformance?.kind[kind],
      value,
    };
    accumulateur.unshift(res);
    return accumulateur;
  }, []);

  if (!userPerformance) return null;

  return (
    <div className="chartradar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" dy="1em" outerRadius="60%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="subject" stroke="#fbfbfb" tickLine={false} />
          <Radar
            dataKey="value"
            stroke="transparent"
            fill="#E60000"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

/**
 * ChartRadar component props
 */
ChartRadar.propTypes = {
  data: PropTypes.array,
};

export default ChartRadar;
