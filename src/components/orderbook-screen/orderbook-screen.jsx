import React from 'react';
import Header from '../header/header';

const OrderbookScreen = () => {
  return (
    <>
      <Header />

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
