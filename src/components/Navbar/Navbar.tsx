import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Header = ({ heading }: { heading: string }) => {
  return (
    <nav className="NavBar">
      <div className="top-main-div">
        <div>
          <h1 className="heading">
            CSS <span className="css-logo">only</span>
          </h1>
        </div>
      </div>
      <div className="homeButton">
        <NavLink className="home-link" to="/">
          HOME
        </NavLink>
      </div>
      <div>
        <input className="top-nav-Search" placeholder="   search" type="text" />
      </div>
      <div className="topNavIconListDiv">
        <ul className="topNavIconList">
          <li className="topNavListItem">
            <i className="fab fa-linkedin-in fa-2x"></i>
          </li>
          <li className="topNavListItem">
            <i className="fab fa-twitter fa-2x"></i>
          </li>

          <li className="topNavListItem">
            <i className="fab fa-github fa-2x"></i>
          </li>
        </ul>
      </div>
    </nav>
  );
};
