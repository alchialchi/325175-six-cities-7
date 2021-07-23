import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../const';
import { connect } from 'react-redux';

function UserInfo({ email }) {
  return (
    <li className="header__nav-item user">
      <Link
        className="header__nav-link header__nav-link--profile"
        to={APP_ROUTES.FAVORITES}
      >
        <div className="header__avatar-wrapper user__avatar-wrapper">
        </div>
        <span className="header__user-name user__name">
          {email}
        </span>
      </Link>
    </li>
  );
}

UserInfo.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ USER }) => ({
  email: USER.user.email,
});

export { UserInfo };
export default connect(mapStateToProps)(UserInfo);
