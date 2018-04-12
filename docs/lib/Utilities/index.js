import React from 'react';
import Content from '../UI/Content';

const items = [
  {
    name: 'Colors',
    to: '/utilities/colors/'
  },
  {
    name: 'Clearfix',
    to: '/utilities/clearfix/'
  }
];

function Utilities(props) {
  return (
    <Content items={items} {...props} />
  );
}

export default Utilities;
