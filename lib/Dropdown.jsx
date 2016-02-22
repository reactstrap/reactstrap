import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  disabled: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  open: PropTypes.bool,
  tag: PropTypes.string
};

const defaultProps = {
  open: false,
  tag: 'div'
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: props.open
    };

    this.openDropdown = this.openDropdown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleContainerClick = this.handleContainerClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentDidMount() {
    if (this.state.open) {
      this.openDropdown();
    }
  }

  componentWillUnmount() {
    this.closeDropdown();
  }

  handleDocumentClick() {
    if (this.state.open) {
      this.closeDropdown();
    }
  }

  handleContainerClick(e) {
    if (e.nativeEvent && e.nativeEvent.stopImmediatePropagation) {
      e.nativeEvent.stopImmediatePropagation();
    }
  }

  toggleDropdown(e) {
    if (this.props.disabled) {
      return e.preventDefault();
    }

    if (this.state.open) {
      this.closeDropdown();
    } else {
      this.openDropdown();
    }
  }

  closeDropdown() {
    this.setState({
      open: false
    });
    document.removeEventListener('click', this.handleDocumentClick);
  }

  openDropdown() {
    this.setState({
      open: true
    });
    document.addEventListener('click', this.handleDocumentClick);
  }

  renderChildren() {
    return React.Children.map(React.Children.toArray(this.props.children), (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child,
          {
            closeDropdown: this.closeDropdown,
            handleContainerClick: this.handleContainerClick,
            isDropdownOpen: this.state.open,
            openDropdown: this.openDropdown,
            toggleDropdown: this.toggleDropdown,
          }
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
      'tag': TagName,
      ...attributes
    } = omit(this.props, ['children', 'open']);

    const classes = classNames(
      className,
      group ? 'btn-group' : 'dropdown',
      {
        open: this.state.open,
        dropup: dropup
      }
    );

    return (
      <TagName {...attributes}
        className={classes}>
        {this.renderChildren()}
      </TagName>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default Dropdown;
