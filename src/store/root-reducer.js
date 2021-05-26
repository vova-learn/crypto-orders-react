import {ActionTypes} from '../store/types';
import {tickers} from './../mocks/data';

const DefaultTicker = {
  BTCUSDT: tickers[0],
};

const initialState = {
  ticker: DefaultTicker.BTCUSDT,
  tickers,
  orderbook: {},
  isLoadOrderbook: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TICKER:
      return {...state, ticker: action.payload, isLoadOrderbook: false};
    case ActionTypes.LOAD_ORDERBOOK:
      const orderbook = {
        asks: action.payload.asks,
        bids: action.payload.bids,
      };
      return {...state, orderbook, isLoadOrderbook: true};
    default:
      return {...state};
  }
};

export default rootReducer;
