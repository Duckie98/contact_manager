import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// functional component
const Header = props => {
  // including variables to props
  const { branding } = props;

  // display to browser
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home" />
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus" />
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question" />
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// initialize the variables
Header.defaultProps = {
  branding: "Contact Manager"
};

// define the type of variables
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
