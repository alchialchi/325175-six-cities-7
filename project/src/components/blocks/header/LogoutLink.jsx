import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '../../../const';
import { logout } from '../../../store/api-action';

function LogoutLink() {
  const dispatch = useDispatch();
  return (
    <Link
      className="header__nav-link"
      to={APP_ROUTES.SIGN_IN}
      onClick={() => dispatch(logout())}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

export default LogoutLink ;
