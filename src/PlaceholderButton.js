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

const defaultProps = {
  color: 'primary',
  tag: Button,
};

const PlaceholderButton = React.forwardRef((props, ref) => {
  let { cssModule, className, tag: Tag, ...attributes } = props;

  let { attributes: modifiedAttributes, colClasses } = getColumnClasses(
    attributes,
    cssModule,
  );

  const classes = mapToCssModules(
    classNames('placeholder', className, colClasses),
    cssModule,
  );

  return <Button {...modifiedAttributes} className={classes} disabled ref={ref} />;
})

PlaceholderButton.propTypes = propTypes;
PlaceholderButton.defaultProps = defaultProps;
PlaceholderButton.displayName = 'PlaceholderButton';

export default PlaceholderButton;
