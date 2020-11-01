import { createStore } from 'redux';
import currencyData from 'reducers';

const store = createStore(currencyData);

export default store;
