import React from "react";
import PropTypes from "prop-types";

const CardInfo = (props) => {
  return (
    <div className="cardinfo">
      <div className="cardinfo__content">
        <img src={props.icon} alt="" />
        <div className="text">
          <h1>{props.value}</h1>
          <p>{props.kind}</p>
        </div>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  value: PropTypes.string,
  kind: PropTypes.string,
};

export default CardInfo;
