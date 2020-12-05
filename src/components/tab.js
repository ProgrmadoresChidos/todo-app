import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Tab = ({ children, to, exact }) => {

  const match = useRouteMatch({
    path: to,
    exact,
  });

  return (
    <Link className="nav__tab" to={to}>
      {children}
      {match ? <div className="nav__tab--selected" /> : null}
    </Link>
  );
};

export default Tab;