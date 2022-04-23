import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Seo from './seo';
import '../../assets/stylesheets/style.scss';
import SiteHeader from '../ui/SiteHeader';

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
        <div className="site-wrapper site-wrapper--contain">
          <p>
            Content created under{' '}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              Creative Commons Attribution-NonCommercial-ShareAlike 4.0
              International License
            </a>
            <Link to="/blog/i-am-not-tracking-you">No tracking</Link>
          </p>
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
