import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../navbar/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar__link">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </div>
    </nav>
  );
}
