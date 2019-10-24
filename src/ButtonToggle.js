import React from "react";
import PropTypes from 'prop-types';
import Button from "./Button";
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.bool,
};

const defaultProps = {
  defaultValue: false,
};

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: props.defaultValue,
      focus: false,
    }

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onBlur(e) {
    if(this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false,
    });
  }

  onFocus(e) {
    if(this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true,
    });
  }

  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if(this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState({
      toggle: !this.state.toggle,
    });
  }

  render() {
    const {
      className,
      cssModule,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className, 
      { 
        focus: this.state.focus, 
        active: this.state.toggle,
        disabled: this.props.disabled 
      }
      ), cssModule);

    return <Button
      onBlur={this.onBlur} 
      onFocus={this.onFocus} 
      onClick={this.onClick}
      className={classes}
      {...attributes}
    />;
  }
}

ButtonToggle.propTypes = propTypes;
ButtonToggle.defaultProps = defaultProps;

export default ButtonToggle;