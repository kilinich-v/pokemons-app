import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getListSuccess,
  getListError,
  getItemSuccess,
  getItemError
} from './actions';

const initialState = {};

const pokemonsList = createReducer(initialState, {
  [getListSuccess]: (state, { payload }) => [...state, payload.pokemonsList]
});

const pokemonsItem = createReducer(initialState, {
  [getItemSuccess]: (_, { payload }) => payload.pokemonsItem
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
  [getListSuccess]: () => true,
  [getItemSuccess]: () => true
});

export const pokemonsReducer = combineReducers({
  pokemonsList,
  pokemonsItem,
  error,
  isLoading
});
