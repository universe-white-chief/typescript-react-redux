import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppRouter } from './router';
import { Provider } from 'react-redux'
import { configureStore } from './store';

ReactDOM.render(
  <Provider store={ configureStore() }>
    <AppRouter/>
  </Provider>, document.getElementById('root'));
