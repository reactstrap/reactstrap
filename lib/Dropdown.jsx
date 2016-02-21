import React, { PropTypes } from 'react';
import classNames from 'classnames';
import omit from 'lodash.omit';

const propTypes = {
  disabled: PropTypes.bool,
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

    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleContainerClick = this.handleContainerClick.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  componentWillUnmount() {
    this.removeDocumentEventListener();
  }

  removeDocumentEventListener() {
    document.removeEventListener('click', this.handleDocumentClick);
  }

  handleDocumentClick() {
    if (this.state.open) {
      this.removeDocumentEventListener();
      this.setState({
        open: !this.state.open
      });
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
      document.removeEventListener('click', this.handleDocumentClick);
    } else {
      document.addEventListener('click', this.handleDocumentClick);
    }

    this.setState({
      open: !this.state.open
    });
  }

  closeDropdown() {
    if (this.state.open) {
      this.setState({
        open: false
      });
    }
  }

  renderChildren() {
    return React.Children.map(React.Children.toArray(this.props.children), (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child,
          {
            isDropdownOpen: this.state.open,
            handleContainerClick: this.handleContainerClick,
            toggleDropdown: this.toggleDropdown
          }
        );
      }
      return child;
    });
  }

  render() {
    const {
      className,
      'tag': TagName,
      ...attributes
    } = omit(this.props, ['children', 'open']);

    const classes = classNames(
      className,
      'dropdown',
      { 'open': this.state.open }
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
