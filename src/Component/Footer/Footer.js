import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="container">
  <div className="row">
    <div className="col">
      <h5>RuRo Coder</h5>
      <p className="detail">Understanding computers and learning the basics of coding helps children to develop an appreciation of how things work.</p>
    </div>
    <div className="col">
      <ul className="list-item">
      <h5>CONTACT US</h5>
      <li>ruro@coder.com</li>
      <li>+880 121 010 2924</li>
      <li>Terms & Conditions</li>
      <li>Privacy Policy</li>
      <li>Contacts</li>
      </ul>
    </div>
    <div className="col">
    <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
        <h5>FEATURES</h5>
        <li className="nav-item">
          <Link className="nav-link text-light active fw-bold" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light active fw-bold" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light active fw-bold" aria-current="page" to="/service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light active fw-bold" aria-current="page" to="/instructor">Instructor</Link>
        </li>
      </ul>
    </div>
  </div>
</div>
    <h6>Copyright© 2021 RuRo Coder.All Rights Reserved.</h6>
    </div>
  );
};

export default Footer;