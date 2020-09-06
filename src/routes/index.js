import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import MaxDoctor from '../pages/maxDoctor';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/maxdoctor" component={MaxDoctor} />
    </Switch>
  );
}