import React from 'react';
import Header from '../header/header';
import Trades from '../trades/trades';

const TradesScreen = () => {
  return (
    <>
      <Header isTrades />
      <Trades />
    </>
  );
};

export default TradesScreen;
