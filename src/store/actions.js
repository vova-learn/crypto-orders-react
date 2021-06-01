import {ActionTypes} from './types';

const getSordetOrders = (ordersDepth, ordersTrade, isBids = true) => {
  let right = ordersDepth.length;
  let left = 0;
  let index;
  let resultIndex;

  // разворачиваем массив с новой ценой
  // Или for let i = ordersTrade.length
  ordersTrade = ordersTrade.reverse();
  for (const order of ordersTrade) {
    const [price, amount] = order;

    while (left < right) {
      index = Math.floor((left + right) / 2);
      // сохранять дублирование цены ">=" else <="
      if (isBids && price > ordersDepth[index][0]) {
        resultIndex = index;
      } else if (!isBids && price < ordersDepth[index][0]) {
        resultIndex = index;
      }

      if (isBids && price < ordersDepth[index][0]) {
        left = index + 1;
      } else if (!isBids && price > ordersDepth[index][0]) {
        left = index + 1;
      } else {
        right = index;
      }
    }

    ordersDepth.splice(resultIndex, 0, [price, amount]);
  }

  ordersDepth = ordersDepth.slice(resultIndex);
  return ordersDepth;
};

export const ActionCreator = {
  changeTicker: (ticker) => ({
    type: ActionTypes.CHANGE_TICKER,
    payload: ticker,
  }),
  loadOrderbook: (orderbook) => ({
    type: ActionTypes.LOAD_ORDERBOOK,
    payload: orderbook,
  }),
  addOrderbook: (orderbook, orderbookWS) => ({
    type: ActionTypes.ADD_ORDERBOOK,
    payload: {
      asks: getSordetOrders(orderbook.asks, orderbookWS.asks, false),
      bids: getSordetOrders(orderbook.bids, orderbookWS.bids),
    }
  }),
  changeLoadOrderbook: (isLoadOrderbook) => ({
    type: ActionTypes.CHANGE_LOAD_ORDERBOOK,
    payload: isLoadOrderbook,
  }),
};
