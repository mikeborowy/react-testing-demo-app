/*eslint-disable no-alert, no-console */
import {createStore, applyMiddleware} from 'redux';
import reduxPromise from 'redux-promise';
import rootReducers from 'reducers';

export default function initStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(reduxPromise)
)};