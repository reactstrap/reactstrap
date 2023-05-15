import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';
import Dropdown from './Dropdown';
import { InputGroupContext } from './InputGroupContext';

const propTypes = {
  /** Add custom class */
  className: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  /** Sets size of InputGroup */
  size: PropTypes.string,
  /** Set a custom element for this component */
  tag: tagPropType,
  type: PropTypes.string,
};

function InputGroup(props) {
  const {
    className,
    cssModule,
    tag: Tag = 'div',
    type,
    size,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(className, 'input-group', size ? `input-group-${size}` : null),
    cssModule,
  );

  if (props.type === 'dropdown') {
    return <Dropdown {...attributes} className={classes} />;
  }

  return (
    <InputGroupContext.Provider value={{ insideInputGroup: true }}>
      <Tag {...attributes} className={classes} />
    </InputGroupContext.Provider>
  );
}

InputGroup.propTypes = propTypes;

export default InputGroup;
