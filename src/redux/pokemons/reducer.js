import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
  getListRequest,
  getListSuccess,
  getListError,
  getListFromTypesRequest,
  getListFromTypesSuccess,
  getListFromTypesError,
  getItemRequest,
  getItemSuccess,
  getItemError,
  getTypesSuccess,
  getTypesError,
  removePokemon,
  removePokemonsFromTypes,
  clearErrors
} from './actions';

const pokemons = createReducer([], {
  [getListSuccess]: (_, { payload }) => payload
});

const pokemonsFromTypes = createReducer(null, {
  [getListFromTypesSuccess]: (_, { payload }) => payload.pokemon,
  [removePokemonsFromTypes]: () => null
});

const pokemon = createReducer(null, {
  [getItemSuccess]: (_, { payload }) => payload,
  [removePokemon]: () => null
});

const types = createReducer(null, {
  [getTypesSuccess]: (_, { payload }) => payload.results
});

const error = createReducer(null, {
  [getListError]: (_, { payload }) => payload,
  [getListFromTypesError]: (_, { payload }) => payload,
  [getItemError]: (_, { payload }) => payload,
  [getTypesError]: (_, { payload }) => payload,
  [clearErrors]: () => null
});

const loadPokemonsList = createReducer(false, {
  [getListRequest]: () => true,
  [getListSuccess]: () => false,
  [getListError]: () => false,
  [getListFromTypesRequest]: () => true,
  [getListFromTypesSuccess]: () => false,
  [getListFromTypesError]: () => false
});

const loadPokemon = createReducer(false, {
  [getItemRequest]: () => true,
  [getItemSuccess]: () => false,
  [getItemError]: () => false
});

export const pokemonsReducer = combineReducers({
  pokemons,
  pokemonsFromTypes,
  pokemon,
  types,
  error,
  loadPokemonsList,
  loadPokemon
});
