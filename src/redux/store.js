import { createStore } from 'redux';

import gameReducers from './reducers';

const store = createStore(gameReducers);

export default store;
