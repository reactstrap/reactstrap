import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';
import UI from '../UI';

export default () => {
  return (
    <div>
      <UI.Nav/>
      <section className="jumbotron text-xs-center m-b-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12">
              <p className="lead">
                <img src="/assets/logo.png" alt="" width="150px" />
              </p>
              <h1 className="jumbotron-heading display-4">404 - Not Found</h1>
              <p className="lead">
                Can't find what you're looking for? <a href="https://github.com/reactstrap/reactstrap/issues/new">Open</a> up an issue.
              </p>
              <p>
                <Button color="danger-outline" className="m-r-1" El={Link} to="/">Get Started</Button>
                <Button color="danger" El={Link} to="/components">View Components</Button>
              </p>
            </div>
          </div>
        </div>
      </section>
      <UI.Footer/>
    </div>
  );
};
