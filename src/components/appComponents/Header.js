import React from 'react';
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header>
      <nav>
        <Link to="/" className="brand-name">Boostore CMS</Link>
        <Link to="/" className="nav-link">BOOKS</Link>
        <Link to="/categories" className="nav-link">CATEGORIES</Link>
        <span className="user-avator"><i className="fa fa-user"></i></span>
      </nav>
    </header>
  );
}

export default Header;