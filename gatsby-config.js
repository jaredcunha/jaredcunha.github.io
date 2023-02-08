module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jaredcunha.com',
    title: 'Jared Cunha',
    description:
      'Jared Cunha is a front-end developer and designer based in Washington, DC',
    image: 'share-card-generic.png',
    twitterUserName: 'jaredcunha',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/svg/logo.svg',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: `${__dirname}/src/content/photos`,
      },
    },
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2400,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
          site {
              siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
              }
          }
          }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url:
                    site.siteMetadata.siteUrl +
                    '/' +
                    edge.node.frontmatter.type +
                    '/' +
                    edge.node.frontmatter.slug,
                  guid:
                    site.siteMetadata.siteUrl +
                    '/' +
                    edge.node.frontmatter.type +
                    '/' +
                    edge.node.frontmatter.slug,
                });
              });
            },
            query: `
              {
              allMdx(
                  sort: { order: DESC, fields: [frontmatter___date] },
              ) {
                  edges {
                  node {
                      excerpt
                      body
                      frontmatter {
                        title
                        date
                        slug
                        type
                      }
                  }
                  }
              }
              }
          `,
            output: '/rss.xml',
            title: 'Jared Cunha',
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: '^/blog/',
          },
        ],
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    `gatsby-transformer-remark`,
  ],
};
