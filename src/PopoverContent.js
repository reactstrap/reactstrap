import React from 'react';
import PopoverBody from './PopoverBody';
import { warnOnce } from './utils';

const PopoverContent = (props) => {
  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
  return <PopoverBody {...props} />;
};

export default PopoverContent;
