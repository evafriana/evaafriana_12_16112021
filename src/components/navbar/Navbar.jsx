import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../navbar/Logo";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar__link">
        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          Accueil
        </NavLink>
        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          Profil
        </NavLink>
        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          Réglage
        </NavLink>
        <NavLink to="/" onClick={(e) => e.preventDefault()}>
          Communauté
        </NavLink>
      </div>
    </nav>
  );
}
