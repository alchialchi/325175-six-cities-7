import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../store/api-action';
import Header from '../blocks/header/Header';
import HiddenSvg from '../svg/HiddenSvg';
import { APP_ROUTES, AuthorizationStatus } from '../../const';
import { redirectToRoute } from '../../store/action';

function SignIn({ city, onSubmit, isAuthorized, redirectToRoot }) {

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      login: loginRef.current.value,
      password: passwordRef.current.value,
    });
  };

  if (isAuthorized) {
    redirectToRoot();
  }

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--login">
        <Header />
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input
                    ref={loginRef}
                    className="login__input form__input"
                    type="email" name="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input
                    ref={passwordRef}
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <button to={APP_ROUTES.ROOT} className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={APP_ROUTES.ROOT}>
                  <span>{city}</span>
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}

SignIn.propTypes = {
  city: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isAuthorized: PropTypes.bool.isRequired,
  redirectToRoot: PropTypes.func.isRequired,
};

const mapStateToProps = ({ PROCESS, USER }) => ({
  city: PROCESS.city,
  isAuthorized: USER.authorizationStatus === AuthorizationStatus.AUTH,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
  redirectToRoot() {
    dispatch(redirectToRoute(APP_ROUTES.ROOT));
  },
});

export { SignIn };
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
