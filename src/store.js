import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import { movieReducer } from './reducers/movie';
import { searchReducer } from './reducers/search';
import { personReducer } from './reducers/person';

export default createStore(
  combineReducers({
    movieReducer,
    searchReducer,
    personReducer
  }),
  {},
  composeWithDevTools(
    applyMiddleware(
      thunk,
      promise()
    )
  )
);
