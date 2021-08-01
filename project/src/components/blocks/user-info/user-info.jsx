import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppRoute } from '../../../const';
import { getUser } from '../../../store/user/selectors';

function UserInfo() {
  const userEmail = useSelector(getUser).email;
  const userAvatar = useSelector(getUser).avatarUrl;

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={AppRoute.FAVORITES}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
          <img style={{ borderRadius: '50%' }} src={userAvatar} alt={'user'} />
        </div>
        <span className="header__user-name user__name">
          {userEmail}
        </span>
      </Link>
    </li>
  );
}

export default React.memo(UserInfo);
