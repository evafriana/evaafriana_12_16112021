import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <section className="navbar">
      <Logo />
      <div className="navbar__link">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </div>
    </section>
  );
}
