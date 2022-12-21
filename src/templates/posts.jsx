import React from 'react';
import { graphql } from 'gatsby';
import DefaultLayout from '../components/layout/default';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import { formatDate } from '../utils';

const shortcodes = { Link }; // Provide common components here

const PageTemplate = ({ data, children, description, title, date }) => {
  return (
    <DefaultLayout title={title} description={description} data={date}>
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
      }
    }
  }
`;

export default PageTemplate;
