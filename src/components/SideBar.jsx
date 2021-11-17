import React from "react";
import BarLink from "./BarLink";
import link1 from "../assets/link1.png";
import link2 from "../assets/link2.png";
import link3 from "../assets/link3.png";
import link4 from "../assets/link4.png";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="sidebar__links">
        <BarLink img={link1} />
        <BarLink img={link2} />
        <BarLink img={link3} />
        <BarLink img={link4} />
      </div>
      <p className="footer">Copyright, SportSee 2020</p>
    </section>
  );
}
