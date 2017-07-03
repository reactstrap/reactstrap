const _ = require('lodash');
const path = require('path');
const fs = require('fs-extra');
const slugify = require('slugify');

const resourceTypePathMap = {
  pages: {
    component: path.resolve('./src/templates/page.js')
  },
  docs: {
    component: path.resolve('./src/templates/docs.js')
  }
};

const ensureSlashes = slug => {
  if (slug.charAt(0) !== '/') {
    slug = '/' + slug;
  }

  if (slug.charAt(slug.length - 1) !== '/') {
    slug += '/';
  }

  return slug.toLowerCase();
};

const parsePostFileName = fileNode => {
  return path.basename(
    fileNode.relativePath,
    path.extname(fileNode.relativePath)
  );
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const pages = [];
    resolve(
      graphql(
        `
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              fields {
                slug
                collection
              },
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
      ).then(result => {
        if (result.errors) {
          console.error('[BUILD ERROR]', result.errors);
          return reject(result.errors);
        }

        const nodes = result.data.allMarkdownRemark.edges.map(e => e.node);

        // Create pages.
        _.each(nodes, node => {
          createPage({
            path: node.fields.slug, // required
            component: resourceTypePathMap[node.fields.collection].component,
            context: {
              slug: node.fields.slug,
              collection: node.fields.collection
            }
          });
        });
      })
    );
  });
};

// Add custom slug for blog posts to both File and MarkdownRemark nodes.
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  switch (node.internal.type) {
    case 'File':
      const parsedFilePath = path.parse(node.relativePath);
      const slug = `/${parsedFilePath.dir}/`;
      createNodeField({
        node,
        name: 'slug',
        value: slug
      });
      return;

    case 'MarkdownRemark':
      const fileNode = getNode(node.parent);
      let nodeSlug = ensureSlashes(
        _.get(node, 'frontmatter.path') ||
          slugify(
            _.get(node, 'frontmatter.title') || parsePostFileName(fileNode)
          )
      );

      if (
        nodeSlug &&
        resourceTypePathMap[fileNode.sourceInstanceName] &&
        resourceTypePathMap[fileNode.sourceInstanceName].path
      ) {
        nodeSlug =
          resourceTypePathMap[fileNode.sourceInstanceName].path + nodeSlug;
      }

      createNodeField({
        node,
        name: 'collection',
        value: fileNode.sourceInstanceName
      });

      if (nodeSlug) {
        createNodeField({ node, name: 'slug', value: nodeSlug });
      }
      return;
  }
};
