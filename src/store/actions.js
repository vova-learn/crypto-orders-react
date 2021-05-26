import {ActionTypes} from './types';

export const ActionCreator = {
  changeTicker: (ticker) => ({
    type: ActionTypes.CHANGE_TICKER,
    payload: ticker,
  }),
  loadOrderbook: (orderbook) => ({
    type: ActionTypes.LOAD_ORDERBOOK,
    payload: orderbook,
  }),
};
