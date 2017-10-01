import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Game from './containers/Game';
import store from './redux/store';

import Styles from './index.css';

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('moo')
)
