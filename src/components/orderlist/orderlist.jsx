import React from 'react';
import PropTypes from 'prop-types';
import Orderitem from '../orderitem/orderitem';
import {propTicker} from '../../props-validation';
import Spinner from '../spinner/spinner';

const Orderlist = ({ticker, orders, isBids, isAsks, isLoadOrderbook}) => {
  const {symbols} = ticker;

  return (
    <div className="orderlist">
      <ul className="orderlist-header">
        <li className="orderlist-header__item">
          <p className="orderlist-header__title">Количество({symbols[0]})</p>
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
        {isLoadOrderbook && <Orderitem orders={orders} isBids={isBids} isAsks={isAsks} />}

      </div>
    </div>
  );
};

Orderlist.defaultProps = {
  isBids: false,
  isAsks: false,
};

Orderlist.propTypes = {
  ticker: PropTypes.shape(propTicker).isRequired,
  orders: PropTypes.array,
  isBids: PropTypes.bool,
  isAsks: PropTypes.bool,
  isLoadOrderbook: PropTypes.bool.isRequired,
};

export default Orderlist;
