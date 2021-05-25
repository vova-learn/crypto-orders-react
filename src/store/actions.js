import {ActionTypes} from './types';

export const ActionCreator = {
  changePair: (pair) => ({
    type: ActionTypes.CHANGE_PAIR,
    payload: pair,
  })
};
