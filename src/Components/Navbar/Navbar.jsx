import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState('menu');

  return (
    <div id="navbar" className="navbar">
      <ul className="nav-menu">
        <li>
          <a
            className={`anchor-link${menu === 'home' ? ' active' : ''}`}
            href="#home"
            onClick={() => setMenu('home')}
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={`anchor-link${menu === 'about-us' ? ' active' : ''}`}
            href="#about-us"
            onClick={() => setMenu('about-us')}
          >
            About Us
          </a>
        </li>
        <li>
          <a
            className={`anchor-link${menu === 'services' ? ' active' : ''}`}
            href="#services"
            onClick={() => setMenu('services')}
          >
            Services
          </a>
        </li>
        <li>
          <a
            className={`anchor-link${menu === 'portfolio' ? ' active' : ''}`}
            href="#portfolio"
            onClick={() => setMenu('portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className={`anchor-link${menu === 'contact' ? ' active' : ''}`}
            href="#contact"
            onClick={() => setMenu('contact')}
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-connect">Connect With Me</div>
    </div>
  );
};

export default Navbar;