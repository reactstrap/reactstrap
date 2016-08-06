/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import omit from 'lodash.omit';
import TetherContent from './TetherContent';
import DropdownMenu from './DropdownMenu';

const propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.any
};

const defaultProps = {
  isOpen: false,
  tag: 'div'
};

const childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

const defaultTetherConfig = {
  classPrefix: 'bs-tether',
  classes: { element: 'dropdown', enabled: 'open' },
  constraints: [
    { to: 'scrollParent', attachment: 'together none' },
    { to: 'window', attachment: 'together none' }
  ]
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.getTetherConfig = this.getTetherConfig.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getChildContext() {
    return {
      toggle: this.props.toggle,
      isOpen: this.props.isOpen
    };
  }

  componentDidMount() {
    this.handleProps();
  }

  componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  }

  componentWillUnmount() {
    this.removeEvents();
  }

  getTetherTarget() {
    const container = ReactDOM.findDOMNode(this);

    return container.querySelector('[data-toggle="dropdown"]');
  }

  getTetherConfig(childProps) {
    const target = () => this.getTetherTarget();
    let vElementAttach = 'top';
    let hElementAttach = 'left';
    let vTargetAttach = 'bottom';
    let hTargetAttach = 'left';

    if (childProps.right) {
      hElementAttach = 'right';
      hTargetAttach = 'right';
    }

    if (this.props.dropup) {
      vElementAttach = 'bottom';
      vTargetAttach = 'top';
    }

    return {
      ...defaultTetherConfig,
      attachment: vElementAttach + ' ' + hElementAttach,
      targetAttachment: vTargetAttach + ' ' + hTargetAttach,
      target,
      ...this.props.tether
    };
  }

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick(e) {
    const container = ReactDOM.findDOMNode(this);

    if (container.contains(e.target) && container !== e.target) {
      return;
    }

    this.toggle();
  }

  handleProps() {
    if (this.props.tether) {
      return;
    }

    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle();
  }

  renderChildren() {
    const { tether, children, ...attrs } = this.props;
    attrs.toggle = this.toggle;

    return React.Children.map(React.Children.toArray(children), (child) => {
      if (tether && child.type === DropdownMenu) {
        let tetherConfig = this.getTetherConfig(child.props);
        return (
          <TetherContent {...attrs} tether={tetherConfig}>{child}</TetherContent>
        );
      }

      return child;
    });
  }

  render() {
    const {
      className,
      dropup,
      group,
      tag: Tag,
      isOpen,
      ...attributes
    } = omit(this.props, ['toggle', 'tether']);

    const classes = classNames(
      className,
      {
        'btn-group': group,
        dropdown: !group,
        open: isOpen,
        dropup: dropup
      }
    );

    return (
      <Tag
        {...attributes}
        className={classes}
      >
        {this.renderChildren()}
      </Tag>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
Dropdown.childContextTypes = childContextTypes;

export default Dropdown;
