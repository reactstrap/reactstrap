
import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default function TabPane({ children, className }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
TabPane.propTypes = propTypes;
