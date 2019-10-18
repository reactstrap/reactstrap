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
}

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      focus: false,
    }

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onBlur() {
    this.props.onBlur();
    this.setState({
      focus: false,
    });
  }

  onFocus() {
    this.props.onFocus();
    this.setState({
      focus: true,
    });
  }

  onClick(e) {
    this.props.onClick();

    if (this.props.disabled) {
      e.preventDefault();
      return;
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

export default ButtonToggle;