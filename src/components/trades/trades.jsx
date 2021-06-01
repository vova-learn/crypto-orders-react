import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getTicker, getOrderbook, getLoadOrderbookStatus} from '../../store/selectors';
import {propTicker} from '../../props-validation';

import Orderlist from './../orderlist/orderlist';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import {ActionCreator} from '../../store/actions';

const Trades = ({ticker, orderbook, isLoadOrderbook, onChangeLoadOrderbook}) => {
  const {symbol} = ticker;

  useEffect(() => {
    if (isLoadOrderbook) {
      onChangeLoadOrderbook(false);
    }
  }, [isLoadOrderbook]);

  const getOrders = () => {
    return orderbook.bids.reduce((acc, item, index) => {
      acc.push(item);
      acc.push(orderbook.asks[index]);
      return acc;
    }, []);
  };

  const isOrderbookFull = !!Object.keys(orderbook).length;

  return (
    <main className="main container">
      <h1 className="visually-hidden">Сделки пары {symbol}</h1>
      <section className="orderbook">

        {isOrderbookFull && <Orderlist ticker={ticker} orders={getOrders()} isOrdersLoad />}

        {!isOrderbookFull &&
          <div className="no-orders">
            <h2 className="no-orders__title">Нет просмотренных сделок</h2>
            <Link to={AppRoute.ORDERBOOK} className="no-orders__link">
              <span>просмотреть сделки <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="no-orders__arrow-icon"><path d="M5 13.47l1.41-1.41 5.1 5.1V3h1.99v14.15l5.09-5.09L20 13.47l-7.5 7.5-7.5-7.5z" fill="currentColor"></path></svg></span>
            </Link>
          </div>
        }

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
  onChangeLoadOrderbook: PropTypes.func.isRequired,
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
    onChangeLoadOrderbook: (isLoadOrderbook) => {
      dispatch(ActionCreator.changeLoadOrderbook(isLoadOrderbook));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trades);

