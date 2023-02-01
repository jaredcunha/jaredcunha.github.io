import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Seo from './seo';
import '../assets/stylesheets/style.scss';
import SiteHeader from '../components/ui/SiteHeader';

const DefaultLayout = ({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
  bodyClass = false,
}) => {
  return (
    <>
      <Seo
        title={title}
        description={description}
        image={image}
        path={path}
        bodyClass={bodyClass}
      />
      <SiteHeader />
      <main role="main" id="main-content">
        {children}
      </main>
      <footer className="footer" role="contentinfo">
        <div className="site-wrap site-wrap--contain footer__wrapper">
          <div className="footer__col">
            <h2 className="footer__heading">Elsewhere</h2>
            <nav aria-label="Social Media">
              <ul className="footer__nav-list">
                <li>
                  <a href="https://www.linkedin.com/in/jaredcunha/" rel="me">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/jaredcunha" rel="me">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://glass.photo/jared-cunha" rel="me">
                    Glass
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/jaredcunha" rel="me">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://mastodon.social/@jaredcunha" rel="me">
                    Mastodon
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__col">
            <h2 className="footer__heading">Site info</h2>
            <nav aria-label="Site info">
              <ul className="footer__nav-list">
                <li>
                  <Link to="/rss.xml">Feed</Link>
                </li>
                <li>
                  <Link to="/blog/i-am-not-tracking-you">No tracking</Link>
                </li>
                <li>
                  © Jared Cunha <strong>{new Date().getFullYear()}</strong>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  path: PropTypes.string,
  bodyClass: PropTypes.string,
};

export default DefaultLayout;
