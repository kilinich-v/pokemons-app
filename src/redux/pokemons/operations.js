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
  (url = null) =>
  async dispatch => {
    dispatch(getListRequest());

    try {
      const res = await axios.get(
        url ? url : 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
      );
      console.log(res.data);

      dispatch(getListSuccess(res.data));
    } catch (error) {
      dispatch(getListError(error.message));
    }
  };

export const findPokemon = query => async dispatch => {
  dispatch(getListRequest());

  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query}`);
    console.log(res.data);

    dispatch(getListSuccess(res.data));
  } catch (error) {
    dispatch(getListError(error.message));
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
