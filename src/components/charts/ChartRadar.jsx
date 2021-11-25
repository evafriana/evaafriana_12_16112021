import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import PropTypes from "prop-types";

const ChartRadar = (props) => {
  const { userPerformance } = props;

  const data = userPerformance?.data.reduce((accumulateur, { value, kind }) => {
    const res = {
      subject: userPerformance.kind[kind],
      value,
    };
    accumulateur.push(res);
    return accumulateur;
  }, []);

  return (
    <div className="chartradar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
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

ChartRadar.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ChartRadar;
