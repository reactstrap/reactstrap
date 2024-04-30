import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Button from './Button';
import { getColumnClasses } from './Col';

const propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  outline: PropTypes.bool,
  className: PropTypes.string,
  tag: tagPropType,
  cssModule: PropTypes.object,
};

function PlaceholderButton(props) {
  let { cssModule, className, tag: Tag = Button, ...attributes } = props;

  let { modifiedAttributes, colClasses } = getColumnClasses(
    { color: 'primary', ...attributes },
    cssModule,
  );

  const classes = mapToCssModules(
    classNames('placeholder', className, colClasses),
    cssModule,
  );

  return <Tag {...modifiedAttributes} className={classes} disabled />;
}

PlaceholderButton.propTypes = propTypes;

export default PlaceholderButton;
