import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';

import { pokemonsReducer } from './pokemons';

const store = createStore(
  pokemonsReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
