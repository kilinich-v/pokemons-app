import axios from 'axios';
import {
  getListRequest,
  getListSuccess,
  getListError,
  getItemRequest,
  getItemSuccess,
  getItemError
} from './actions';

export const getPokemons =
  (limit = 20, offset = 20) =>
  async dispatch => {
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

export const findPokemon = name => async dispatch => {
  dispatch(getItemRequest());

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

    dispatch(getItemSuccess(res.data));
  } catch (error) {
    dispatch(getItemError(error.message));
  }
};

export const getPokemon = url => async dispatch => {
  dispatch(getItemRequest());

  try {
    const res = await axios.get(url);
    dispatch(getItemSuccess(res.data));
  } catch (error) {
    dispatch(getItemError(error.message));
  }
};
