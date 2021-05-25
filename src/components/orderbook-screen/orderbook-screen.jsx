import React from 'react';

const OrderbookScreen = () => {
  return (
    <>
      <header className="header container">
        <nav className="header__navigation">
          <div className="trading">
            <div className="trading__pair pair">
              <h2 className="pair__title">BTCUSDT</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="pair__arrow-menu"><path d="M15.5 10.29v1.75L12 15.75l-3.5-3.71v-1.75h7z" fill="#76808F" /></svg>
              <div className="pair__menu">
                <button className="pair__item" disabled title="BTCUSDT">BTCUSDT</button>
                <button className="pair__item" title="BTCUSDT">BTCUSDT</button>
                <button className="pair__item" title="BTCUSDT">BTCUSDT</button>
              </div>
            </div>
            <div className="trading__ticker ticker trading__ticker--red">
              <p className="ticker__title">---</p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="ticker__arrow-icon"><path d="M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z" fill="currentColor" /></svg>
            </div>
          </div>
          <ul className="site-navigation">
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link site-navigation__link--active">
                Биржевой стакан
              </a>
            </li>
            <li className="site-navigation__item">
              <a href="#" className="site-navigation__link">
                Сделки
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main container">
        <h1 className="visually-hidden">Торги пары BTCUSDT</h1>
        <section className="orderbook">
          <div className="orderlist">
            <ul className="orderlist-header">
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Размер(BTC)</p>
              </li>
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Цена(USDT)</p>
              </li>
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Сумма(USDT)</p>
              </li>
            </ul>
            <div className="orderlist__container">
              <ul className="orderlist__row">
                <li className="orderlist___item">
                  <p className="orderlist___value">0.039</p>
                </li>
                <li className="orderlist___item">
                  <p className="orderlist___value">36863.54</p>
                </li>
                <li className="orderlist___item">
                  <p className="orderlist___value">1437.67</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="orderlist">
            <ul className="orderlist-header">
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Размер(BTC)</p>
              </li>
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Цена(USDT)</p>
              </li>
              <li className="orderlist-header__item">
                <p className="orderlist-header__title">Сумма(USDT)</p>
              </li>
            </ul>
            <div className="orderlist__container">
              <ul className="orderlist__row">
                <li className="orderlist___item">
                  <p className="orderlist___value">0.039</p>
                </li>
                <li className="orderlist___item">
                  <p className="orderlist___value">36863.54</p>
                </li>
                <li className="orderlist___item">
                  <p className="orderlist___value">1437.67</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default OrderbookScreen;
