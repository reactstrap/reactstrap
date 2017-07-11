const siteUrl = process.env.NODE_ENV === 'production'
  ? 'https://reactstrap.github.io'
  : 'http://localhost:8000';
const S3PATH = process.env.S3PATH;

const config = {
  siteMetadata: {
    title: 'reactstrap',
    description: 'reactstrap website',
    site_url: siteUrl,
    link: siteUrl,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/docs`,
        name: 'docs',
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `remark-example`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93155939-1`
      }
    }
    // `gatsby-plugin-offline` TODO: look into caching issues
  ]
};

if (S3PATH && S3PATH !== 'latest') {
  config.pathPrefix = `/${S3PATH}`
}

module.exports = config;
