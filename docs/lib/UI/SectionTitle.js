import React from 'react';
import PropTypes from 'prop-types';

function SectionTitle({ tag: Tag, children, ...props }) {
  return <Tag id={children.replace(/\s/g, '-').replace(/[^a-zA-Z0-9-_]/g, '')} {...props}>{children}</Tag>;
}

SectionTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  children: PropTypes.string.isRequired,
};

SectionTitle.defaultProps = {
  tag: 'h3',
};

export default SectionTitle;
