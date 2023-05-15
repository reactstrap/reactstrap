import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

function OffcanvasBody(props) {
  const { className, cssModule, tag: Tag = 'div', ...attributes } = props;
  const classes = mapToCssModules(
    classNames(className, 'offcanvas-body'),
    cssModule,
  );

  return <Tag {...attributes} className={classes} />;
}

OffcanvasBody.propTypes = propTypes;

export default OffcanvasBody;
