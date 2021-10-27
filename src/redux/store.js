import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import { pokemonsReducer } from './pokemons';

const middleware = [thunk];

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer
  },
  middleware
});

export default store;
