import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AuthorizationStatus } from '../../../const';
import Logo from './Logo';
import UserInfo from './UserInfo';
import LogoutLink from './LogoutLink';
import LoginLink from './LoginLink';
import { getAuthorizationStatus } from '../../../store/user/selectors';

function Header({ isAuthorized }) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {isAuthorized && <UserInfo />}
              <li className="header__nav-item">
                {isAuthorized ? <LogoutLink /> : <LoginLink />}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthorized: getAuthorizationStatus(state) === AuthorizationStatus.AUTH,
});

export { Header };
export default connect(mapStateToProps)(Header);

