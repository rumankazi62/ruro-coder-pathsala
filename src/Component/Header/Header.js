import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-color">
 <div className="container-fluid">
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
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
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  );
};

export default Header;