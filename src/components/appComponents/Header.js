import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link to="/" className="brand">Boostore CMS</Link>
        <Link to="/" className="nav-link">BOOKS</Link>
        <Link to="/categories" className="nav-link">CATEGORIES</Link>
        <span className="user-avator"><FontAwesomeIcon icon={faUser} /></span>
      </nav>
    </header>
  );
}

export default Header;
