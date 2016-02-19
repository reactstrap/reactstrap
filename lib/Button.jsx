import React, { PropTypes } from 'react';
import classNames from 'classnames';

const btnColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger', 'link'];
const btnOutlineColors = btnColors.map(c => c !== 'link' ? c + '-outline' : null);

const propTypes = {
  el: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.oneOf([...btnColors, ...btnOutlineColors])
};

const defaultProps = {
  color: 'primary'
};

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const CustomEl = this.props.el;
    const classes = classNames(
      this.props.className,
      'btn',
      'btn-' + this.props.color
    );

    if (CustomEl) {
      return (
        <CustomEl {...this.props} className={classes}>
          {this.props.children}
        </CustomEl>
      );
    }
    return (
      <button {...this.props} className={classes}>
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
