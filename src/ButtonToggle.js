import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from './Button';
import { mapToCssModules } from './utils';

const propTypes = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  defaultValue: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

const defaultProps = {
  defaultValue: false,
};

class ButtonToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: props.defaultValue,
      focus: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false,
    });
  }

  onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true,
    });
  }

  onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState(({ toggled }) => ({
      toggled: !toggled,
    }));
  }

  render() {
    const {
      className,
      ...attributes
    } = this.props;

    const classes = mapToCssModules(classNames(
      className,
      {
        focus: this.state.focus,
      }
    ), this.props.cssModule);

    return (
      <Button
        active={this.state.toggled}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onClick={this.onClick}
        className={classes}
        {...attributes}
      />
    );
  }
}

ButtonToggle.propTypes = propTypes;
ButtonToggle.defaultProps = defaultProps;

export default ButtonToggle;
