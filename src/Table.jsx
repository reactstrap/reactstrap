import React, { PropTypes } from 'react';
import classNames from 'classnames';

const propTypes = {
  className: PropTypes.any,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  striped: PropTypes.bool,
  inverse: PropTypes.bool,
  hover: PropTypes.bool,
  reflow: PropTypes.bool,
  responsive: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

const defaultProps = {
  tag: 'table'
};

const Table = (props) => {
  const {
    className,
    size,
    bordered,
    striped,
    inverse,
    hover,
    reflow,
    responsive,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames(
    className,
    'table',
    size ? 'table-' + size : false,
    bordered ? 'table-bordered' : false,
    striped ? 'table-striped' : false,
    inverse ? 'table-inverse' : false,
    hover ? 'table-hover' : false,
    reflow ? 'table-reflow' : false
  );

  const table = <Tag {...attributes} className={classes} />;

  if (responsive) {
    return (
      <div className="table-responsive">{table}</div>
    );
  }

  return table;
};

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
