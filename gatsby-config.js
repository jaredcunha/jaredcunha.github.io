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
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/blog`,
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
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
