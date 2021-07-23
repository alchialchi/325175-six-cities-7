import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { APP_ROUTES } from '../../../const';
import { getUser } from '../../../store/user/selectors';

function UserInfo({ userEmail }) {
  const userAvatar = useSelector(getUser).avatarUrl;

  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={APP_ROUTES.FAVORITES}
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

UserInfo.propTypes = {
  userEmail: PropTypes.string,
};

export default React.memo(UserInfo);
