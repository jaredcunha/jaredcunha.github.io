import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DefaultLayout from '../components/layout/default';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx(limit: 4, sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          slug
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  `);

  const posts = data.allMdx.nodes;

  return (
    <>
      <DefaultLayout bodyClass="landing-page">
        <div className="hero site-wrap site-wrap--contain">
          <div className="hero__feature">
            <StaticImage
              src="https://images.jaredcunha.com/_ui/me.png"
              alt=""
              className="hero__img"
              placeholder="none"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h1 className="hero__heading">
              <span className="hero__heading__tagline">
                Hello, I’m Jared Cunha
              </span>
              I make technology for the public good
            </h1>
            <p className="hero__intro">
              Senior Director of Creative Technology at{' '}
              <strong>
                <a href="https://coforma.io">Coforma</a>
              </strong>{' '}
              an accessibility-minded engineer and designer living in
              Washington, DC
            </p>
          </div>
        </div>
        <section className="recent-posts site-wrap site-wrap--contain">
          <h2 className="landing__section-header">Recent blog posts</h2>
          <ul className="article-list article-list--grid">
            {posts.map((post) => (
              <li className="article-list__item" key={post.id}>
                <h3 className="article-list__heading">
                  <Link to={post.slug} className="article-list__link">
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="article-list__excerpt">
                  {post.frontmatter.excerpt}
                </p>
                <p className="article-list__date">
                  Posted on {post.frontmatter.date}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </DefaultLayout>
    </>
  );
};

export default IndexPage;
