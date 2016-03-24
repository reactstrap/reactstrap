import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router';
import UI from '../UI';


class Components extends React.Component {
  render() {
    return (
      <div>
        <UI.Nav/>
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-3 col-md-push-9">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/components/buttons">Buttons</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-9 col-md-pull-3" {...this.props}/>
          </div>
        </div>
        <UI.Footer/>
      </div>
    );
  }
}

export default Components;
