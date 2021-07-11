import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../blocks/header/Header';
import { APP_ROUTES } from '../../const';

function NotFound() {
  return (
    <section className="page">
      <Header loggedOut />
      <section className="container">
        <h1>404. Page not found</h1>
        <Link to={APP_ROUTES.ROOT}>Вернуться на главную</Link>
      </section>
    </section>
  );
}

export default NotFound;
