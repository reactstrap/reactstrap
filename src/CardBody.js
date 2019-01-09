import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div'
};

const CardBody = React.forwardRef((props, ref) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'card-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} ref={ref} />
  );
});

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;

export default CardBody;
