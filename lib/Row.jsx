import React from 'react';
import classNames from 'classnames';

const propTypes = {};

const defaultProps = {};

class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      'row'
    );

    return (
      <div {...attributes} className={classes}/>
    );
  }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
