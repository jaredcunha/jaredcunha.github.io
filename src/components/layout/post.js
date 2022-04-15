import * as React from 'react';
import { Link } from 'gatsby';
import DefaultLayout from './default';

const PostLayout = ({ children, pageContext }) => {
  const { title, description } = pageContext.frontmatter;
  return (
    <DefaultLayout title={title} description={description}>
      {children}
      <Link to="/">&larr; Back</Link>
    </DefaultLayout>
  );
};

export default PostLayout;
