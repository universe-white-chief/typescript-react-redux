import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GreetingPage } from '../pages/greeting';
import { ErrorPage } from '../pages/error';

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={ GreetingPage }/>
      <Route render={ () => <ErrorPage errorType={ 'NotFound' }/> }/>
    </Switch>
  </Router>
);
