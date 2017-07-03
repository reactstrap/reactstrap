import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import get from 'lodash/get';
import { Container, Row, Col, NavItem, NavLink, Nav } from 'reactstrap';
import { Switch, Route } from 'react-router';

const ComponentLink = props => {
  return (
    <NavItem>
      <NavLink tag={Link} to={props.to} activeClassName="active">
        {props.title}
      </NavLink>
    </NavItem>
  );
};

const createDocLinks = docs => {
  return docs.map(doc => {
    const slug = doc.fields.slug;
    const title = doc.frontmatter.title;
    return <ComponentLink key={slug} to={slug} title={title} />;
  });
};

const filterDocs = (docs, section) => {
  return docs.filter(d => d.frontmatter.section === section);
};

const ComponentSidebar = props => {
  const docs = get(props, 'data.allMarkdownRemark.edges', []).map(d => d.node);
  const filteredDocs = filterDocs(docs, 'components');
  const docLinks = createDocLinks(filteredDocs);

  return (
    <div className="docs-sidebar mb-3">
      <h5>Components</h5>
      <Nav className="flex-column">
        {docLinks}
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap/issues/13">
            <small>Additional Components</small>
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

const UtilitiesSidebar = props => {
  const docs = get(props, 'data.allMarkdownRemark.edges', []).map(d => d.node);
  const filteredDocs = filterDocs(docs, 'utilities');
  const docLinks = createDocLinks(filteredDocs);

  return (
    <div className="docs-sidebar mb-3">
      <h5>Utilities</h5>
      <Nav className="flex-column">
        {docLinks}
      </Nav>
    </div>
  );
};

const Sidebar = props => {
  return (
    <Switch>
      <Route
        path="/components/"
        render={() => <ComponentSidebar {...props} />}
      />
      <Route
        path="/utilities/"
        render={() => <UtilitiesSidebar {...props} />}
      />
    </Switch>
  );
};

class Page extends React.Component {
  render() {
    const content = this.props.data.markdownRemark;

    return (
      <Container className="content">
        <Row>
          <Col md={{ size: 3, push: 9 }}>
            <Sidebar {...this.props} />
          </Col>
          <Col md={{ size: 9, pull: 3 }}>
            <h2>
              {content.frontmatter.title}
            </h2>
            <hr />
            <article
              className="markdown"
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Page;

export const pageQuery = graphql`
  query DocsByPath($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___title] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fields: { collection: { eq: "docs" } }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            section
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
