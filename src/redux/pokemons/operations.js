import axios from 'axios';
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
  getTypesRequest,
  getTypesSuccess,
  getTypesError,
  clearErrors
} from './actions';

export const getPokemons =
  (limit = 20, offset = 20) =>
  async dispatch => {
    dispatch(clearErrors());
    dispatch(getListRequest());

    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      dispatch(getListSuccess(res.data));
    } catch (error) {
      dispatch(getListError(error.message));
    }
  };

export const getPokemonsFromType = url => async dispatch => {
  dispatch(clearErrors());
  dispatch(getListFromTypesRequest());

  try {
    const res = await axios.get(url);
    dispatch(getListFromTypesSuccess(res.data));
  } catch (error) {
    dispatch(getListFromTypesError(error.message));
  }
};

export const findPokemon = name => async dispatch => {
  dispatch(clearErrors());
  dispatch(getItemRequest());

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch(getItemSuccess(res.data));
  } catch (error) {
    dispatch(getItemError(error.message));
  }
};

export const getPokemon = url => async dispatch => {
  dispatch(clearErrors());
  dispatch(getItemRequest());

  try {
    const res = await axios.get(url);
    dispatch(getItemSuccess(res.data));
  } catch (error) {
    dispatch(getItemError(error.message));
  }
};

export const getTypes = () => async dispatch => {
  dispatch(clearErrors());
  dispatch(getTypesRequest());

  try {
    const res = await axios.get('https://pokeapi.co/api/v2/type');
    dispatch(getTypesSuccess(res.data));
  } catch (error) {
    dispatch(getTypesError(error.message));
  }
};
