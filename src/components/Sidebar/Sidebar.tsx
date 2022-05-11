import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
const SideNav = () => {
  return (
    <nav className="side-bar">
      <div className="list">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <NavLink className="link" to="/buttons">
              Button
            </NavLink>
          </li>
          <li className="sideBarListItem">
            <NavLink className="link" to="/cards">
              Card
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideNav;
