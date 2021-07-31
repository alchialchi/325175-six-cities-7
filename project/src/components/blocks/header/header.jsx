import React from 'react';
import { useSelector } from 'react-redux';

import { AuthorizationStatus } from '../../../const';
import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import LogoutLink from '../logout-link/logout-link';
import LoginLink from '../login-link/login-link';
import { getAuthorizationStatus } from '../../../store/user/selectors';

function Header() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

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

export default React.memo(Header);
