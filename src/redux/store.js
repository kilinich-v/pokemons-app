import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { pokemonsReducer } from './pokemons';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    pokeStore: pokemonsReducer
  },
  middleware
});

export default store;
