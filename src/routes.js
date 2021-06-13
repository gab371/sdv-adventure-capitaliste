import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import Produits from './pages/produits';
import Ameliorer from './pages/upgrade-product';
import Manager from './pages/manager';

const Routes = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/produits" component={Produits} exact />
        <Route path="/amelioration" component={Ameliorer} exact />
        <Route path="/manager" component={Manager} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default Routes;
