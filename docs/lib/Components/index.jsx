import React from 'react';
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
              <div className="docs-sidebar">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/components/buttons" activeClassName="active">Buttons</Link>
                  </li>
                </ul>
              </div>
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
