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
        <div className="hero">
          <h1 className="hero__heading">
            <span className="hero__heading__tagline">Hello, I’m</span>
            Jared Cunha
          </h1>
          <p className="hero__intro">
            I’m a designer and engineer who loves working on ethical
            technology&nbsp;projects.
          </p>
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
                <p class="article-list__date">
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
