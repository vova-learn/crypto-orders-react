import React from 'react';
import Header from '../header/header';
import Ordebook from './../orderbook/orderbook';

const OrderbookScreen = () => {
  return (
    <>
      <Header isOrderbook />
      <Ordebook />
    </>
  );
};

export default OrderbookScreen;
