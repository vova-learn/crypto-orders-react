import {ActionTypes} from './types';

export const ActionCreator = {
  changeTicker: (ticker) => ({
    type: ActionTypes.CHANGE_TICKER,
    payload: ticker,
  }),
};
