import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { APP_ROUTES } from '../../../const';
import { logout } from '../../../store/api-action';

function LogoutLink({ onLogout }) {
  return (
    <Link
      className="header__nav-link"
      to={APP_ROUTES.SIGN_IN}
      onClick={() => onLogout()}
    >
      <span className="header__signout">Sign out</span>
    </Link>
  );
}

LogoutLink.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export { LogoutLink };
export default connect(null, mapDispatchToProps)(LogoutLink);
