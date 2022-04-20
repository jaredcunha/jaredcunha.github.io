module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.jaredcunha.com',
    title: 'Jared Cunha',
    description:
      'Jared Cunha is a front-end developer and designer based in Washington, DC',
    image: '',
  },
  plugins: [
    'gatsby-plugin-react-helmet-async',
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
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
              maxWidth: 1800,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve('./src/components/layout/post.js'),
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown-pages`,
        name: `markdown-pages`,
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
    `gatsby-transformer-remark`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
