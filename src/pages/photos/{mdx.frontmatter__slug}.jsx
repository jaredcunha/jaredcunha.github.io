import * as React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import DefaultLayout from '../../templates/default';
import { formatDate } from '../../utils';
import { MDXProvider } from '@mdx-js/react';

const shortcodes = { Link }; // Provide common components here

const BlogPostTemplate = ({ data, children }) => {
  return (
    <DefaultLayout
      title={data.mdx.frontmatter.title}
      description={data.mdx.frontmatter.excerpt}
      date={data.mdx.frontmatter.date}
    >
      <article className="post">
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{formatDate(data.mdx.frontmatter.date)}</p>
        <MDXProvider components={shortcodes}>{children}</MDXProvider>
      </article>
    </DefaultLayout>
  );
};

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        excerpt
        slug
      }
      body
    }
  }
`;

BlogPostTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  data: PropTypes.object,
  pageContext: PropTypes.object,
  title: PropTypes.string,
};

export default BlogPostTemplate;
