import * as React from 'react';
import { Link } from 'gatsby';
import SiteLogo from '../../svg/logo.svg';
import Icon from '../ui/Icon';

const SiteHeader = () => {
  return (
    <header>
      <nav className="nav" role="navigation" aria-label="Primary">
        <Link to="/" className="nav__home-link" aria-label="Homepage">
          <SiteLogo />
        </Link>
        <button
          type="button"
          id="open-nav-menu"
          className="nav__btn nav__btn--open"
          aria-label="open navigation menu"
        >
          <Icon icon="bars" />
        </button>

        <div className="nav__flyout" id="nav-flyout">
          <div className="nav_flyout-actions">
            <button
              type="button"
              id="close-nav-menu"
              className="nav__btn nav__btn--close"
              aria-label="Close navigation menu"
            >
              <Icon icon="times" />
            </button>
          </div>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/about" className="nav__link">
                About
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/blog" className="nav__link">
                Blog
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default SiteHeader;
