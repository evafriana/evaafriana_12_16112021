import React from "react";
import { Link } from "react-router-dom";

export default function BarLink(props) {
  return (
    <Link to="/" className="barlink">
      <img src={props.img} alt="barlink" />
    </Link>
  );
}
