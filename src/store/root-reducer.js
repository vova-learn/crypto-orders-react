import {ActionTypes} from '../store/types';
import {Pair} from '../const';

const initialState = {
  pair: Pair.BTCUSDT.name,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_PAIR:
      return {...state, pair: action.payload};
    default:
      return {...state};
  }
};

export default rootReducer;
