import React from 'react';
import Header from '../header/header';

const NotFoundScreen = () => {
  return (
    <>
      <Header />
      <main className="main container">
        <h1 className="visually-hidden">Страница не найдена</h1>
        <section className="not-found">
          <h2>Ошибка 404</h2>
          <p>Страница не найдена</p>
        </section>
      </main>

    </>
  );
};

export default NotFoundScreen;
