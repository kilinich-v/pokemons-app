import { createAction } from '@reduxjs/toolkit';

export const getListRequest = createAction('pokemon/getListRequest');
export const getListSuccess = createAction('pokemon/getListSuccess');
export const getListError = createAction('pokemon/getListError');

export const getListFromTypesRequest = createAction(
  'pokemon/getListFromTypesRequest'
);
export const getListFromTypesSuccess = createAction(
  'pokemon/getListFromTypesSuccess'
);
export const getListFromTypesError = createAction(
  'pokemon/getListFromTypesError'
);

export const getItemRequest = createAction('pokemon/getItemRequest');
export const getItemSuccess = createAction('pokemon/getItemSuccess');
export const getItemError = createAction('pokemon/getItemError');

export const getTypesRequest = createAction('pokemon/getTypesRequest');
export const getTypesSuccess = createAction('pokemon/getTypesSuccess');
export const getTypesError = createAction('pokemon/getTypesError');

export const removePokemon = createAction('pokemon/removePokemon');
export const removePokemonsFromTypes = createAction(
  'pokemon/removePokemonsFromTypes'
);
export const clearErrors = createAction('pokemon/clearErrors');
