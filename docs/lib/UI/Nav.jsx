import React from 'react';
import { Link, IndexLink } from 'react-router';

export default () => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">reactstrap</Link>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <IndexLink className="nav-link" to="/" activeClassName="active">Getting Started</IndexLink>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/components" activeClassName="active">Components</Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://github.com/reactstrap/reactstrap">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
