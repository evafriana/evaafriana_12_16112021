import React from "react";
import logo from "../../assets/logo.png";

export default function CardInfo() {
  return (
    <div className="cardinfo">
      <div className="cardinfo__content">
        <div className="icon">
          <img src={logo} alt="" />
        </div>
        <div className="text">
          <h1>1930</h1>
          <p>calories</p>
        </div>
      </div>
    </div>
  );
}
