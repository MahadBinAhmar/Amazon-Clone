import React from 'react';
import './NavBar.css'; // Import the CSS
import hamburgerIcon from '../Assets/hamburger.png'; // Import the custom three-lines image

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <img src={hamburgerIcon} alt="Menu" className="hamburger-icon" /> All
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Today's Deals</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Customer Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Registry</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Gift Cards</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Sell</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
