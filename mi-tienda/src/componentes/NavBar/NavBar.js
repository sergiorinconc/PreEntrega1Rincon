
import React from 'react';
import CartWidget from '../CartWidget/CartWidget'; 
import '../../styles/NavBar.css'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-left">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/categoria/ropa">Ropa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categoria/electronica">Electrónica</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categoria/hogar">Hogar</a>
            </li>
          </ul>
        </div>

        <div className="navbar-center">
          <img src="/ojo.png" alt="Logo" className="navbar-logo" />
          <a className="navbar-name" href="/">El Mercado de los Vrykul</a>
        </div>

        <div className="navbar-right">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;



