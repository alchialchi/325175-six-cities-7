import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';

export default function LoginLink() {
  return (
    <Link
      className="header__nav-link header__nav-link--profile"
      to={AppRoute.SIGN_IN}
    >
      <div className="header__avatar-wrapper user__avatar-wrapper" />
      <span className="header__login">Sign in</span>
    </Link>
  );
}
