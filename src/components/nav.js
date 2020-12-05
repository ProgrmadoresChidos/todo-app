import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink className="nav__tab" activeClassName="nav__tab--selected" to="all">All</NavLink>
      <NavLink className="nav__tab" activeClassName="nav__tab--selected" to="active">Active</NavLink>
      <NavLink className="nav__tab" activeClassName="nav__tab--selected" to="completed">Completed</NavLink>
    </nav>
  );
};

export default Nav;