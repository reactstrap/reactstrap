import React from 'react';
import PopoverHeader from './PopoverHeader';
import { warnOnce } from './utils';

const PopoverTitle = (props) => {
  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
  return <PopoverHeader {...props} />;
};

export default PopoverTitle;
