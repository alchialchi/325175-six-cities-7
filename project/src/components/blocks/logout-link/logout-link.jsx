import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { logout } from '../../../store/api-action';

function LogoutLink() {
  const dispatch = useDispatch();
  return (
    <Link
      className="header__nav-link"
      to={AppRoute.SIGN_IN}
      onClick={(e) => {
        e.preventDefault();
        dispatch(logout());
      }}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default LogoutLink ;
