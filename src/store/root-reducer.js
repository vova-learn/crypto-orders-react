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
      const orderbookLoad = {
        asks: action.payload.asks,
        bids: action.payload.bids,
      };
      return {...state, orderbook: orderbookLoad, isLoadOrderbook: true};
    case ActionTypes.ADD_ORDERBOOK:
      const orderbookAdd = {
        asks: [...action.payload.asks, ...(state.orderbook.asks.slice(0, state.orderbook.asks.length - action.payload.asks.length))],
        bids: [...action.payload.bids, ...(state.orderbook.bids.slice(0, state.orderbook.bids.length - action.payload.bids.length))],
      };
      return {...state, orderbook: orderbookAdd};
    default:
      return {...state};
  }
};

export default rootReducer;
