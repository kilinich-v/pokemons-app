import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getListRequest,
  getListSuccess,
  getListError,
  getItemRequest,
  getItemSuccess,
  getItemError,
  removePokemonFromStore,
  clearErrors
} from './actions';

const pokemons = createReducer([], {
  [getListSuccess]: (_, { payload }) => payload
});

const pokemon = createReducer(null, {
  [getItemSuccess]: (_, { payload }) => payload,
  [removePokemonFromStore]: () => null
});

const error = createReducer(null, {
  [getListError]: (_, { payload }) => payload,
  [getItemError]: (_, { payload }) => payload,
  [clearErrors]: () => null
});

const loadPokemonsList = createReducer(false, {
  [getListRequest]: () => true,
  [getListSuccess]: () => false,
  [getListError]: () => false
});

const loadPokemon = createReducer(false, {
  [getItemRequest]: () => true,
  [getItemSuccess]: () => false,
  [getItemError]: () => false
});

export const pokemonsReducer = combineReducers({
  pokemons,
  pokemon,
  error,
  loadPokemonsList,
  loadPokemon
});
