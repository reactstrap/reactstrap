import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const NotFound = props => {
  return (
    <div>
      <Helmet title={props.data.site.siteMetadata.title} />
      <p>404 - ¯\(°_o)/¯</p>
    </div>
  );
};

NotFound.propTypes = {
  route: PropTypes.object
};

export default NotFound;

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
