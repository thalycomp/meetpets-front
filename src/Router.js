import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import User from './pages/User';

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/user/:id" component={User} />
    </Switch>
  )
}

export default Router;
