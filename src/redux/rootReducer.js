import { combineReducers } from 'redux';

import currenciesReducer from './Currencies/reducer-currencies';

const rootReducer = combineReducers({
  currencies: currenciesReducer,
});

export default rootReducer;
