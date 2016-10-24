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
    {
      [`table-${size}`]: size,
      'table-bordered': bordered,
      'table-striped': striped,
      'table-inverse': inverse,
      'table-hover': hover,
      'table-reflow': reflow,
    }
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
