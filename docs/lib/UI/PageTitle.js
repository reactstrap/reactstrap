import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

function PageTitle({ tag: Tag, title, ...props }) {
  return (
    <React.Fragment>
      <Helmet title={title} />
      <Tag {...props}>{title}</Tag>
    </React.Fragment>
  );
}

PageTitle.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  title: PropTypes.string.isRequired,
};

PageTitle.defaultProps = {
  tag: 'h2',
  classNames: 'h3',
};

export default PageTitle;
