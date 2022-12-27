import * as React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import DefaultLayout from '../templates/default';
import StaticPageHeader from '../components/ui/StaticPageHeader';

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogPostsQuery {
      allMdx(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            excerpt
            title
            slug
          }
          id
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;
  return (
    <>
      <DefaultLayout title="Blog">
        <StaticPageHeader title="Blog" />
        <div className="post">
          <ul className="article-list">
            {posts.map((post) => (
              <li key={post.id} className="article-list__item">
                <h2 className="article-list__heading">
                  <Link
                    to={`${post.frontmatter.slug}`}
                    className="article-list__link"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h2>
                <p className="article-list__excerpt">
                  {post.frontmatter.excerpt}
                </p>
                <p className="article-list__date">
                  Posted on {post.frontmatter.date}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </DefaultLayout>
    </>
  );
};

export default BlogPage;
