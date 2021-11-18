import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img className="logo__navbar" src={logo} alt="logo" />
      </Link>
      <h1 className="logo__text">SportSee</h1>
    </div>
  );
}
