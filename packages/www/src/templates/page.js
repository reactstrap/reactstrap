import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { Container, Row, Col } from 'reactstrap';

class Page extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Container>
        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <article className="markdown" dangerouslySetInnerHTML={{ __html: post.html }} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query PageByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }}) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`;
