import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Header() {
  const { dark, language } = useSelector((state) => state.site);

  return (
    <div>
      <div>
        <nav>
          <NavLink to="/" exact={true} activeClassName="active">
            Anasayfa
          </NavLink>
          <NavLink to="/about" exact={true} activeClassName="active">
            Hakıında
          </NavLink>
          <NavLink to="/profile" exact={true} activeClassName="active">
            Profil
          </NavLink>
        </nav>
      </div>

      <div>
        dark mode ={dark ? "Açık" : "Kapalı"} <br />
        dil = {language}
      </div>
    </div>
  );
}
