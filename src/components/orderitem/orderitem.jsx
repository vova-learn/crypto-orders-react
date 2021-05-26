import React from 'react';
import PropTypes from 'prop-types';
import {FixedPrice} from './../../const';

export const Orderitem = ({orders, isBids, isAsks}) => {
  const isBuy = isAsks ? `orderlist___value--green` : ``;
  const isSale = isBids ? `orderlist___value--red` : ``;

  const getOrderitemJsx = () => {
    return orders.map((order) => {
      let price = Number(order[0]);
      price = Math.floor(price) === 0 ? price.toFixed(FixedPrice.CRYPTO) :
        price.toFixed(FixedPrice.MONEY);

      const amount = Number(order[1]).toFixed(FixedPrice.AMOUNT);
      const total = (price * amount).toFixed(FixedPrice.TOTAL);

      return (
        <ul key={`${total}${price}`} className="orderlist__row">
          <li className="orderlist___item">
            <p className="orderlist___value">{amount}</p>
          </li>
          <li className="orderlist___item">
            <p className={`orderlist___value ${isBuy || isSale}`}>{price}</p>
          </li>
          <li className="orderlist___item">
            <p className="orderlist___value">{total}</p>
          </li>
        </ul>
      );
    });
  };

  return getOrderitemJsx();
};

Orderitem.propTypes = {
  orders: PropTypes.arrayOf(
      PropTypes.array.isRequired,
  ).isRequired,
  isBids: PropTypes.bool.isRequired,
  isAsks: PropTypes.bool.isRequired,
};

export default Orderitem;
