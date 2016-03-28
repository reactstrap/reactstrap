import React, { PropTypes } from 'react';
import classNames from 'classnames';

const colSizes = ['xs', 'sm', 'md', 'lg', 'xl'];
const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.shape({
    size: stringOrNumberProp,
    push: stringOrNumberProp,
    pull: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

const propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps
};

const defaultProps = {
  xs: 12
};

class Col extends React.Component {
  constructor(props) {
    super(props);
  }

  getColumnClasses() {
    let classes = [];

    colSizes.forEach(colSize => {
      let columnProp = this.props[colSize];

      if (!columnProp) {
        return;
      } else if (columnProp.size) {
        classes.push(classNames({
          [`col-${colSize}-${columnProp.size}`]: columnProp.size,
          [`col-${colSize}-push-${columnProp.push}`]: columnProp.push,
          [`col-${colSize}-pull-${columnProp.pull}`]: columnProp.pull,
          [`col-${colSize}-offset-${columnProp.offset}`]: columnProp.offset
        }));
      } else {
        classes.push(`col-${colSize}-${columnProp}`);
      }
    });

    return classes;
  }

  render() {
    const {
      className,
      ...attributes
    } = this.props;

    const classes = classNames(
      className,
      this.getColumnClasses()
    );

    return (
      <div {...attributes} className={classes}/>
    );
  }
}

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
