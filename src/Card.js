import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
  /** Toggles card padding using `.card-body` */
  body: PropTypes.bool,
  /** Add custom class */
  className: PropTypes.string,
  /** Change background color of component */
  color: PropTypes.string,
  /** Change underlying component's CSS base class name */
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.func,
  ]),
  /** Inverts the color */
  inverse: PropTypes.bool,
  /** Changes the card to have only outline */
  outline: PropTypes.bool,
  /** Set a custom element for this component */
  tag: tagPropType,
};

const defaultProps = {
  tag: 'div',
};

function Card(props) {
  const {
    className,
    cssModule,
    color,
    body,
    inverse,
    outline,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(
    classNames(
      className,
      'card',
      inverse ? 'text-white' : false,
      body ? 'card-body' : false,
      color ? `${outline ? 'border' : 'bg'}-${color}` : false,
    ),
    cssModule,
  );

  return <Tag {...attributes} className={classes} ref={innerRef} />;
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default React.forwardRef((props, ref) => <Card innerRef={ref} {...props} />);
