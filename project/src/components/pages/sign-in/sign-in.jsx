import React, { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../../store/api-action';
import Header from '../../blocks/header/header';
import HiddenSvg from '../../svg/hidden-svg';
import { AlertMessage, AppRoute } from '../../../const';
import { getCity } from '../../../store/work-process/selectors';
import { getIsOffline } from '../../../store/user/selectors';
import Toast from '../../blocks/toast/toast';

function SignIn() {
  const dispatch = useDispatch();
  const city = useSelector(getCity);
  const isOffline = useSelector(getIsOffline);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isError, setIsError] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();

  const handlePasswordChange = (evt) =>
    setIsError(evt.target.value.trim().length === 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitDisabled(true);

    const password = passwordRef.current.value.trim();

    if (isError) {
      setIsSubmitDisabled(false);
      return;
    }

    dispatch(login({
      login: loginRef.current.value,
      password: password,
    }))
      .catch(() => {
        setIsSubmitDisabled(false);
      });
  };

  return (
    <React.Fragment>
      <HiddenSvg />
      <div className="page page--gray page--login">
        <Header />
        {isOffline && <Toast message={AlertMessage.OFFLINE} />}
        {isError && <Toast />}
        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="email">E-mail</label>
                  <input
                    ref={loginRef}
                    id="email"
                    className="login__input form__input"
                    type="email" name="email"
                    placeholder="Email"
                    required
                    data-testid="email"
                  />
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden" htmlFor="password">Password</label>
                  <input
                    ref={passwordRef}
                    id="password"
                    className="login__input form__input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    data-testid="password"
                    pattern="^[^\s]+(\s.*)?$"
                    onChange={handlePasswordChange}
                  />
                </div>
                <button className="login__submit form__submit button" type="submit" disabled={isSubmitDisabled}>Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <Link className="locations__item-link" to={AppRoute.ROOT}>
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

export default SignIn;
