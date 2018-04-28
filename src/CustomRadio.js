import React from 'react';

import CustomCheckboxOrRadio from './CustomCheckboxOrRadio';

function CustomRadio(props) {
  return <CustomCheckboxOrRadio {...props} type="radio" />;
}

export default CustomRadio;
