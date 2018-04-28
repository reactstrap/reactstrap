import React from 'react';

import CustomCheckboxOrRadio from './CustomCheckboxOrRadio';

function CustomCheckbox(props) {
  return <CustomCheckboxOrRadio {...props} type="checkbox" />;
}

export default CustomCheckbox;
