import * as React from 'react';
import { useState, useRef, useEffect, useCallback } from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import SiteLogo from '../../svg/logo.svg';
import Icon from '../ui/Icon';
import FocusTrap from 'focus-trap-react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const navOpenClass = 'nav-open';

const SiteHeader = () => {
  const openMenuButtonRef = useRef();
  const [menuVisible, setMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const isWideScreen = width > 720;

  const navClassNames = classNames(
    'nav__flyout',
    menuVisible ? 'nav__flyout--is-open' : ''
  );

  const openNavMenu = () => {
    setMenuVisible(true);
  };

  const closeNavMenu = () => {
    setMenuVisible(false);
    setTimeout(() => {
      openMenuButtonRef.current.focus();
    }, 100);
  };

  const escFunction = useCallback((event) => {
    if (event.key === 'Escape') {
      closeNavMenu();
    }
  }, []);

  useEffect(() => {
    // Prevents focus trapping when user expands window while mobile nav is open
    if (isWideScreen) setMenuVisible(false);

    if (menuVisible) {
      document.body.classList.add(navOpenClass);
      document.addEventListener('keydown', escFunction);
    } else {
      document.body.classList.remove(navOpenClass);
      document.removeEventListener('keydown', escFunction);
    }
  }, [menuVisible, escFunction, isWideScreen]);

  return (
    <header>
      <nav className="nav" role="navigation" aria-label="Primary">
        <Link to="/" className="nav__home-link" aria-label="Homepage">
          <SiteLogo />
        </Link>
        {!menuVisible && (
          <button
            type="button"
            ref={openMenuButtonRef}
            className="nav__btn nav__btn--open"
            aria-label="open navigation menu"
            aria-controls="nav-flyout"
            onClick={openNavMenu}
            data-testid="open-nav-button"
          >
            <Icon icon="bars" />
          </button>
        )}
        <FocusTrap
          active={menuVisible}
          focusTrapOptions={{
            fallbackFocus: '#nav-flyout',
            initialFocus: '.nav__btn--close',
          }}
        >
          <div
            className={navClassNames}
            id="nav-flyout"
            data-testid="nav-flyout"
            tabIndex="-1"
          >
            <div className="nav_flyout-actions">
              <button
                type="button"
                className="nav__btn nav__btn--close"
                aria-label="Close navigation menu"
                onClick={closeNavMenu}
                data-testid="close-nav-button"
              >
                <Icon icon="times" />
              </button>
            </div>
            {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
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
