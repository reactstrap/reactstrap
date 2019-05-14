import React from 'react';

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  dropdownElement: PropTypes.element,
 * }
 */
export const DropdownContext = React.createContext({});