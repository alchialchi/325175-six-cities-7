import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../const';

export default function Logo() {
  return (
    <Link className="header__logo-link header__logo-link--active" to={APP_ROUTES.ROOT}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width="81"
        height="41"
      />
    </Link>
  );
}
