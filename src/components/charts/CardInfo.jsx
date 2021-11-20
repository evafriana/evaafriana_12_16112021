import React from "react";
import logo from "../../assets/logo.png";
import PropTypes from "prop-types";

const CardInfo = (props) => {
  return (
    <div className="cardinfo">
      <div className="cardinfo__content">
        <div className="icon">
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <h1>{props.cal}</h1>
          <p>calories</p>
        </div>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  cal: PropTypes.string,
};

export default CardInfo;
