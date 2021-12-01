import React from "react";
import PropTypes from "prop-types";

/**
 * Create user infos
 * @param {Object} props Data of user info
 * @property {string} icon - icon
 * @property {string} value - value of keydata
 * @property {string} kind - key of keydata
 * @returns {JSX.Element}
 */
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

/**
 * CardInfo component props
 */
CardInfo.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  kind: PropTypes.string,
};

export default CardInfo;
