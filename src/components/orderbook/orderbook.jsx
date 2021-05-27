import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchOrderbook} from '../../store/api-action';
import {getTicker, getOrderbook, getLoadOrderbookStatus} from '../../store/selectors';
import {propTicker} from '../../props-validation';

import Orderlist from './../orderlist/orderlist';
import {ActionCreator} from '../../store/actions';
import useWSDepth from '../../hooks/use-ws-depth';

const Orderbook = ({ticker, orderbook, onLoadOrderbook, isLoadOrderbook, onAddOrderbook}) => {
  const {symbol} = ticker;

  const {
    orderbookWS,
    isWSDepthLoad,
    connectWSDepth,
    disconnectWSDepth,
  } = useWSDepth();

  useEffect(() => {
    if (!isLoadOrderbook && !isWSDepthLoad) {
      onLoadOrderbook(symbol);
    } else if (!isLoadOrderbook && isWSDepthLoad) {
      disconnectWSDepth();
      onLoadOrderbook(symbol);
    } else if (isLoadOrderbook && !isWSDepthLoad) {
      connectWSDepth(ticker);
    }
  }, [isLoadOrderbook, isWSDepthLoad]);

  useEffect(() => {
    if (isLoadOrderbook && isWSDepthLoad) {
      onAddOrderbook(orderbookWS);
    }
  }, [orderbookWS]);

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
  onAddOrderbook: PropTypes.func.isRequired,
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
    },
    onAddOrderbook: (orderbook) => {
      dispatch(ActionCreator.addOrderbook(orderbook));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Orderbook);

