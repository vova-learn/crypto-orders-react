import React from 'react';
import PropTypes from 'prop-types';
import Orderitem from '../orderitem/orderitem';
import {propTicker} from '../../props-validation';
import Spinner from '../spinner/spinner';

const Orderlist = ({ticker, bids, asks, isBids, isAsks, isLoadOrderbook}) => {
  const {symbols} = ticker;

  return (
    <div className="orderlist">
      <ul className="orderlist-header">
        <li className="orderlist-header__item">
          <p className="orderlist-header__title">Размер({symbols[0]})</p>
        </li>
        <li className="orderlist-header__item">
          <p className="orderlist-header__title">Цена({symbols[1]})</p>
        </li>
        <li className="orderlist-header__item">
          <p className="orderlist-header__title">Сумма({symbols[1]})</p>
        </li>
      </ul>
      <div className="orderlist__container">

        {!isLoadOrderbook && <Spinner />}
        {isLoadOrderbook && <Orderitem orders={bids.length ? bids : asks} isBids={isBids} isAsks={isAsks} />}

      </div>
    </div>
  );
};

Orderlist.defaultProps = {
  bids: [],
  asks: [],
  isBids: false,
  isAsks: false,
};

Orderlist.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  bids: PropTypes.array,
  asks: PropTypes.array,
  isBids: PropTypes.bool,
  isAsks: PropTypes.bool,
  isLoadOrderbook: PropTypes.bool.isRequired,
};

export default Orderlist;
