import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import DefaultLayout from '../templates/default';
import { formatDate } from '../utils';
import Image from '../components/ui/Image';

const IndexPage = () => {
  const blogData = useStaticQuery(graphql`
    query {
      post: allMdx(
        filter: { frontmatter: { type: { eq: "blog" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 4
      ) {
        nodes {
          id
          frontmatter {
            title
            date
            excerpt
            slug
          }
        }
      }
      photo: allMdx(
        filter: { frontmatter: { type: { eq: "photos" } } }
        sort: { frontmatter: { date: DESC } }
        limit: 4
      ) {
        nodes {
          id
          frontmatter {
            title
            date
            excerpt
            slug
            coverImage {
              childrenImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  aspectRatio: 4
                  transformOptions: { cropFocus: CENTER }
                )
              }
            }
          }
        }
      }
    }
  `);

  const posts = blogData.post.nodes;
  const photos = blogData.photo.nodes;

  return (
    <>
      <DefaultLayout bodyClass="landing-page">
        <div className="hero site-wrap site-wrap--contain">
          <div className="hero__feature">
            <StaticImage
              src="../images/_ui/me.png"
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
                  <Link
                    to={`/blog/${post.frontmatter.slug}`}
                    className="article-list__link"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="article-list__excerpt">
                  {post.frontmatter.excerpt}
                </p>
                <p className="article-list__date">
                  Posted on {formatDate(post.frontmatter.date)}
                </p>
              </li>
            ))}
          </ul>
        </section>
        <section className="recent-posts site-wrap site-wrap--contain">
          <h2 className="landing__section-header">Recent photography posts</h2>
          <ul className="article-list article-list--grid">
            {photos.map((post) => (
              <li className="article-list__item" key={post.id}>
                <Link
                  to={`/photos/${post.frontmatter.slug}`}
                  tabIndex="-1"
                  aria-hidden="true"
                  className="article-list__photo-link"
                >
                  <Image
                    src={post.frontmatter.coverImage.childrenImageSharp[0]}
                    alt=""
                  ></Image>
                </Link>
                <h3 className="article-list__heading">
                  <Link
                    to={`/photos/${post.frontmatter.slug}`}
                    className="article-list__link"
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p className="article-list__excerpt">
                  {post.frontmatter.excerpt}
                </p>
                <p className="article-list__date">
                  Posted on {formatDate(post.frontmatter.date)}
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
