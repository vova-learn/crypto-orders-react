import '../../scss/style.scss';

import React from 'react';
import OrderbookScreen from '../orderbook-screen/orderbook-screen';
import {AppRoute} from '../../const';
import {Redirect, Route, Switch} from 'react-router';
import TradesScreen from '../trades-screen/trades-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.HOME}>
        <Redirect to={AppRoute.ORDERBOOK} />
      </Route>
      <Route exact path={AppRoute.ORDERBOOK}>
        <OrderbookScreen />
      </Route>
      <Route exact path={AppRoute.TRADES}>
        <TradesScreen />
      </Route>
      <Route>
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};

export default App;
