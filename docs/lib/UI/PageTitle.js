import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function PageTitle({ tag: Tag, title, ...props }) {
  return (
    <Tag {...props}><Helmet title={title} />{title}</Tag>
  );
}

PageTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
  tag: 'h2',
  className: 'h3',
};

export default PageTitle;
