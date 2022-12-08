import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" href="/" >
          {props.title}
        </Link>
        <div className="navbar-collpase" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="navbar-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="navbar-item">
              <Link className="nav-link" to="/About">About</Link>
            </li>
          </ul>
        </div>
        <div
          className={`form-check form-switch text-${
            props.mode === "light" ? "dark" : "light"
          }`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={props.toggleMode}
          />
          <label
            className="form-check-label mx-3"
            htmlFor="flexSwitchCheckDefault"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
