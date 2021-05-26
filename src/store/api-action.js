import {ApiRoute, ApiLimit} from '../const';
import {ActionCreator} from './actions';

export const fetchOrderbook = (symbol) => (dispatch, _getState, api) => {
  api.get(`${ApiRoute.DEPTH}?symbol=${symbol}&limit=${ApiLimit.FIVE_HUNDRED}`)
  .then(({data}) => {
    dispatch(ActionCreator.loadOrderbook(data));
  });
};
