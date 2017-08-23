/* eslint react/no-find-dom-node: 0 */
// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md

import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import { mapToCssModules, omit } from './utils';
import PopperContent from './PopperContent';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

const propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  right: PropTypes.bool,
  placementPrefix: PropTypes.string,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  isOpen: false,
  tag: 'div',
  placementPrefix: 'dropdown-menu',
};

const childContextTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

let i = 0;

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
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

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
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
    const { children, dropup, right, ...attrs } = omit(this.props, ['toggle', 'tag']);

    return React.Children.map(React.Children.toArray(children), (child) => {
      if (child.type === DropdownToggle || child.props['data-toggle'] === 'dropdown') {
        this.id = this.id || child.props.id || `dropdown-${++i}`;
        return React.cloneElement(child, { id: this.id });
      }
      if (child.type === DropdownMenu) {
        let position1 = 'bottom';
        let position2 = 'start';
        if (dropup) {
          position1 = 'top';
        }
        if (right) {
          position2 = 'end';
        }
        attrs.placement = `${position1}-${position2}`;
        return (
          <PopperContent
            {...attrs}
            target={this.id}
          >{child}</PopperContent>
        );
      }

      return child;
    });
  }

  render() {
    const {
      className,
      cssModule,
      dropup,
      group,
      size,
      tag: Tag,
      isOpen,
      ...attributes
    } = omit(this.props, ['toggle', 'placementPrefix', 'right']);

    const classes = mapToCssModules(classNames(
      className,
      {
        'btn-group': group,
        [`btn-group-${size}`]: !!size,
        dropdown: !group,
        show: isOpen,
        dropup: dropup
      }
    ), cssModule);

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
