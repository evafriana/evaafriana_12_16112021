import React from "react";
import { Link } from "react-router-dom";

export default function BarLink(props) {
  return (
    <Link to="/" className="barlink" onClick={(e) => e.preventDefault()}>
      <img src={props.img} alt="barlink" />
    </Link>
  );
}
