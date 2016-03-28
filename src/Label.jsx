import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  color: PropTypes.string,
  pill: PropTypes.bool
};

const defaultProps = {
  color: 'default',
  pill: false
};

class Label extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      color,
      pill,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'label',
      'label-' + color,
      pill ? 'label-pill' : false
    );

    return (
      <span {...attributes}
        className={classes}>
        {children}
      </span>
    );
  }
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
