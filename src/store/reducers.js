import { combineReducers } from 'redux';
import locationReducer from './location';
import chartReducer from '../routes/Chart/modules/reducers';

export const makeRootReducer = asyncReducers => (
  combineReducers({
    location: locationReducer,
    chart: chartReducer,
    ...asyncReducers,
  })
);

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
