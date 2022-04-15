import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Seo from './seo';
import '../../assets/stylesheets/style.scss';

const DefaultLayout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  bodyClass = false,
}) => {
  const data = useStaticQuery(graphql`
    query getSiteTitle {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata ?? {};

  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        path={path}
        bodyClass={bodyClass}
      />

      <header>
        <Link to="/">{meta.title}</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main role="main" id="main-content">
        {children}
      </main>
      <footer className="footer" role="contentinfo">
        <div className="site-wrapper site-wrapper--contain">
          <p>
            Content created under{' '}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>
            <Link to="/blog/2020/02/27/i-am-not-tracking-you">No tracking</Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default DefaultLayout;
