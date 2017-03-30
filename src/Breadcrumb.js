import React from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const { PropTypes } = React;
const propTypes = {
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'ol'
};

const Breadcrumb = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
    className,
    'breadcrumb'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;

export default Breadcrumb;
