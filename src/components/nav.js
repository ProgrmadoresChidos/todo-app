import React from 'react';
import Tab from './tab';

const Nav = () => {
  return (
    <nav>
      <Tab to="/all">All</Tab>
      <Tab to="/active">Active</Tab>
      <Tab to="/completed">Completed</Tab>
    </nav>
  );
};

export default Nav;