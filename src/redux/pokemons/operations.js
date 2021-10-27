import axios from 'axios';
import {
  getListRequest,
  getListSuccess,
  getListError,
  getItemRequest,
  getItemSuccess,
  getItemError
} from './actions';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const getFindPokemons = query => async dispatch => {
  dispatch(getListRequest());

  try {
    const res = await axios.get(`/pokemon/${query}`);
    dispatch(getListSuccess(res.data));
  } catch (error) {
    dispatch(getListError(error.message));
  }
};
