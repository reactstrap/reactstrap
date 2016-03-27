import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import omit from 'lodash.omit';
import TetherContent from './TetherContent';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';

const propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: PropTypes.string,
  tether: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  toggle: PropTypes.func
};

const defaultProps = {
  open: false,
  tag: 'div'
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

    this.state = {
      open: props.open
    };

    this.addEvents = this.addEvents.bind(this);
    this.getTetherConfig = this.getTetherConfig.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);
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

  getTetherConfig(childProps) {
    const target = () => this._target;
    let vElementAttach = 'top';
    let hElementAttach = 'left';
    let vTargetAttach = 'bottom';
    let hTargetAttach = 'left';

    if (childProps.right) {
      hElementAttach = 'right';
      hTargetAttach = 'right';
    }

    if (childProps.dropup) {
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

    this.props.toggle();
  }

  renderChildren() {
    let props = omit(this.props, ['children', 'className', 'id']);
    props.toggle = this.toggle;

    return React.Children.map(React.Children.toArray(this.props.children), (child) => {
      if (React.isValidElement(child)) {
        if (child.type === DropdownToggle) {
          return React.cloneElement(child, {
            ...props,
            ref: (c) => this._target = c
          });
        } else if (child.type === DropdownMenu && !props.isOpen) {
          // don't bother with hidden content
          return null;
        } else if (child.type === DropdownMenu && props.tether) {
          let tetherConfig = this.getTetherConfig(child.props);

          return (
            <TetherContent {...props} tether={tetherConfig}>{child}</TetherContent>
          );
        }
        return React.cloneElement(child, props);
      }
      return child;
    });
  }

  render() {
    const {
      className,
      dropup,
      group,
      'tag': Tag,
      ...attributes
    } = omit(this.props, ['children', 'isOpen']);

    const classes = classNames(
      className,
      {
        'btn-group': group,
        dropdown: !group,
        open: this.props.isOpen,
        dropup: dropup
      }
    );

    return (
      <Tag {...attributes}
        className={classes}>
        {this.renderChildren()}
      </Tag>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
