import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getTicker, getOrderbook, getLoadOrderbookStatus} from '../../store/selectors';
import {propTicker} from '../../props-validation';

import Orderlist from './../orderlist/orderlist';

const Trades = ({ticker, orderbook, isLoadOrderbook}) => {
  const {symbol} = ticker;

  const getOrders = () => {
    if (!isLoadOrderbook) {
      return false;
    }

    return orderbook.bids.reduce((acc, item, index) => {
      acc.push(item);
      acc.push(orderbook.asks[index]);
      return acc;
    }, []);
  };

  const orders = getOrders();

  return (
    <main className="main container">
      <h1 className="visually-hidden">Сделки пары {symbol}</h1>
      <section className="orderbook">

        {isLoadOrderbook && <Orderlist ticker={ticker} orders={orders} isLoadOrderbook />}

      </section>
    </main>

  );
};

Trades.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  orderbook: PropTypes.shape(
      PropTypes.array.isRequired,
  ).isRequired,
  isLoadOrderbook: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ticker: getTicker(state),
    orderbook: getOrderbook(state),
    isLoadOrderbook: getLoadOrderbookStatus(state),
  };
};

export default connect(mapStateToProps, null)(Trades);

