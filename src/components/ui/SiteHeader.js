import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import SiteLogo from '../../svg/logo.svg';
import Icon from '../ui/Icon';
import FocusTrap from 'focus-trap-react';

const body = document.body;
const navOpenClass = 'nav-open';
console.log(body);

const SiteHeader = () => {
  const openMenuButtonRef = useRef();
  const [menuVisible, setMenuVisible] = useState(false);

  const navClassNames = classNames(
    'nav__flyout',
    menuVisible ? 'nav__flyout--is-open' : ''
  );

  const handleMenuToggle = () => {
    setMenuVisible((menuVisible) => !menuVisible);
  };

  useEffect(() => {
    if (menuVisible) {
      body.classList.add(navOpenClass);
    } else {
      body.classList.remove(navOpenClass);
    }
  });

  return (
    <header>
      <nav className="nav" role="navigation" aria-label="Primary">
        <Link to="/" className="nav__home-link" aria-label="Homepage">
          <SiteLogo />
        </Link>
        <button
          type="button"
          ref={openMenuButtonRef}
          className="nav__btn nav__btn--open"
          aria-label="open navigation menu"
          hidden={menuVisible}
          onClick={handleMenuToggle}
        >
          <Icon icon="bars" />
        </button>
        <FocusTrap active={menuVisible}>
          <div className={navClassNames} id="nav-flyout">
            <div className="nav_flyout-actions">
              <button
                type="button"
                className="nav__btn nav__btn--close"
                aria-label="Close navigation menu"
                onClick={() => {
                  handleMenuToggle();
                  setTimeout(() => {
                    openMenuButtonRef.current.focus();
                  }, 100);
                }}
              >
                <Icon icon="times" />
              </button>
            </div>
            <ul className="nav__list" role="list">
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
        </FocusTrap>
      </nav>
    </header>
  );
};

export default SiteHeader;
