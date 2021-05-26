import {ActionTypes} from '../store/types';
import {tickers} from './../mocks/data';

const DefaultTicker = {
  BTCUSDT: tickers[0],
};

const initialState = {
  ticker: DefaultTicker.BTCUSDT,
  tickers,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_TICKER:
      return {...state, ticker: action.payload};
    default:
      return {...state};
  }
};

export default rootReducer;
