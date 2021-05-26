import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchOrderbook} from '../../store/api-action';
import {getTicker, getOrderbook, getLoadOrderbookStatus} from '../../store/selectors';
import {propTicker} from '../../props-validation';

import Orderlist from './../orderlist/orderlist';

const Orderbook = ({ticker, orderbook, onLoadOrderbook, isLoadOrderbook}) => {
  const {symbol} = ticker;
  if (!isLoadOrderbook) {
    onLoadOrderbook(ticker.symbol);
  }

  const {asks, bids} = orderbook;

  return (
    <main className="main container">
      <h1 className="visually-hidden">Торги пары {symbol}</h1>
      <section className="orderbook">

        <Orderlist ticker={ticker} bids={bids} isBids isLoadOrderbook={isLoadOrderbook} />

        <Orderlist ticker={ticker} asks={asks} isAsks isLoadOrderbook={isLoadOrderbook} />

      </section>
    </main>

  );
};

Orderbook.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  orderbook: PropTypes.shape(
      PropTypes.array.isRequired,
  ).isRequired,
  onLoadOrderbook: PropTypes.func.isRequired,
  isLoadOrderbook: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return {
    ticker: getTicker(state),
    orderbook: getOrderbook(state),
    isLoadOrderbook: getLoadOrderbookStatus(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadOrderbook: (symbol) => {
      dispatch(fetchOrderbook(symbol));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orderbook);

