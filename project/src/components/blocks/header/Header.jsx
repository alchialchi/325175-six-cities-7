import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import Logo from './Logo';

export default function Header(props) {
  const { loggedOut = false } = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {loggedOut ? (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.SIGN_IN}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              ) : (
                <React.Fragment>
                  <li className="header__nav-item user">
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to="/profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/sign-out">
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </React.Fragment>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  loggedOut: PropTypes.bool.isRequired,
};