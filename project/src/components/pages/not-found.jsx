import React from 'react';

import Header from '../blocks/header/header';

function NotFound() {
  return (
    <section className="page">
      <Header />
      <section className="container">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </section>
  );
}

export default NotFound;
