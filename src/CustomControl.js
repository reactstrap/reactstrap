/* eslint react/prefer-stateless-function: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Checkbox, Radio, Stacked, Select, File } from './CustomControlStack';
import { mapToCssModules, tagMapper } from './utils';

const propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  type: 'stacked',
};

const getTagType = tagMapper({
  checkbox: Checkbox,
  radio: Radio,
  select: Select,
  stacked: Stacked,
  file: File,
});

class CustomControl extends React.Component {
  render() {
    const {
      className,
      cssModule,
      type,
      getRef,
      ...attributes
    } = this.props;

    let Tag = getTagType(type);

    let customControlClass = 'custom';

    if (['radio', 'checkbox'].indexOf(type) > -1) {
      customControlClass = `${customControlClass}-control custom-${type}`;
    }else if ('radio-stacked' === type) {
      customControlClass = `${customControlClass}-controls-${type}`;
    } else {
      customControlClass = `${customControlClass}-${type}`;
    }

    const classes = mapToCssModules(classNames(
      className,
      customControlClass
    ), cssModule);

    return (<Tag {...attributes} ref={getRef} className={classes} />);
  }
}

CustomControl.propTypes = propTypes;
CustomControl.defaultProps = defaultProps;

export default CustomControl;
