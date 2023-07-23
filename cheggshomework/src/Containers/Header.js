import React, { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import close from '../Assets/icons/x.svg'
import menu from'../Assets/icons/list.svg'

const PageHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  return (
    <header className="header">
      <Link className="logo" to="/"> cheggshomework </Link>
      <nav className={`menu ${isMenuOpen ? 'show' : ''}`}>
        <li>
          <NavLinks to="/" toggleMenu={toggleMenu}>
            Home
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/GetStarted" toggleMenu={toggleMenu}>
            Get started
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/Service" toggleMenu={toggleMenu}>
            Services
          </NavLinks>
        </li>
        <li>
          <NavLinks to="/About" toggleMenu={toggleMenu}>
            About Us
          </NavLinks>
        </li>
        <li className="other-buttons">
        <NavLinks to="/Contact" toggleMenu={toggleMenu}>
            Contact us
          </NavLinks>
        </li>
        
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <img src={isMenuOpen ? close : menu} alt="menu icon" />
      </div>
    </header>
  );
};

function NavLinks({ to, toggleMenu, children, ...properties }) {
  const handleClick = () => {
    toggleMenu();
  };

  return (
    <NavLink to={to} className="menu-item" activeClassName="active" onClick={handleClick} {...properties}>
      {children}
    </NavLink>
  );
}

export default PageHeader;
