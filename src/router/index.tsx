import * as React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {GreetingPage} from '../pages/greeting';
import {ErrorPage} from '../pages/error';

export const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<GreetingPage/>}/>
      <Route element={<ErrorPage errorType={'NotFound'}/>}/>
    </Routes>
  </Router>
);
