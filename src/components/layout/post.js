import * as React from 'react';
import PropTypes from 'prop-types';
import DefaultLayout from './default';
import { formatDate } from '../../utils';

const PostLayout = ({ children, pageContext }) => {
  const { title, description, date } = pageContext.frontmatter;

  return (
    <DefaultLayout title={title} description={description}>
      <article className="post">
        <h1>{title}</h1>
        <p>{formatDate(date)}</p>
        {children}
      </article>
    </DefaultLayout>
  );
};

PostLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  pageContext: PropTypes.object,
};

export default PostLayout;
