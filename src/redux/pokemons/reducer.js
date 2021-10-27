import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getListRequest,
  getListSuccess,
  getListError,
  getItemRequest,
  getItemSuccess,
  getItemError
} from './actions';

const pokemons = createReducer([], {
  [getListSuccess]: (_, { payload }) => payload
});

const pokemon = createReducer(null, {
  [getItemSuccess]: (_, { payload }) => payload
});

const error = createReducer(null, {
  [getListError]:
    () =>
    (_, { payload }) =>
      payload,
  [getItemError]:
    () =>
    (_, { payload }) =>
      payload
});

const isLoading = createReducer(false, {
  [getListRequest]: () => true,
  [getListSuccess]: () => false,
  [getItemRequest]: () => true,
  [getItemSuccess]: () => false
});

export const pokemonsReducer = combineReducers({
  pokemons,
  pokemon,
  error,
  isLoading
});
