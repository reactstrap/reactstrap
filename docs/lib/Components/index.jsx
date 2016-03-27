import React from 'react';
import { Link } from 'react-router';

const NavItem = (props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={props.item.to} activeClassName="active">
        {props.item.name}
      </Link>
    </li>
  );
};


class Components extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: [
        {
          name: 'Buttons',
          to: '/components/buttons/'
        },
        {
          name: 'Button Group',
          to: '/components/button-group/'
        },
        {
          name: 'Button Dropdown',
          to: '/components/button-dropdown/'
        },
        {
          name: 'Dropdowns',
          to: '/components/dropdowns/'
        },
        {
          name: 'Labels',
          to: '/components/labels/'
        },
        {
          name: 'Tooltips',
          to: '/components/tooltips/'
        },
        {
          name: 'Popovers',
          to: '/components/popovers/'
        },
        {
          name: 'Modals',
          to: '/components/modals/'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-3 col-md-push-9">
              <div className="docs-sidebar m-b-3">
                <h5>Components</h5>
                <ul className="nav">
                  { this.state.navItems.map((item, i) => {
                    return <NavItem key={i} item={item} />;
                  })}
                </ul>
              </div>
            </div>
            <div className="col-md-9 col-md-pull-3" {...this.props}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Components;
