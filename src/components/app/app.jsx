import '../../scss/style.scss';

import React from 'react';
import OrderbookScreen from '../orderbook-screen/orderbook-screen';
import {AppRoute} from '../../const';
import {Redirect, Route, Switch} from 'react-router';

const App = () => {
  return (
    <Switch>
      <Route exact path={AppRoute.HOME}>
        <Redirect to={AppRoute.ORDERBOOK} />
      </Route>
      <Route exact path={AppRoute.ORDERBOOK}>
        <OrderbookScreen />
      </Route>
    </Switch>
  );
};

export default App;
