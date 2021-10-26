import axios from 'axios';

axios.defaults.baseURL = 'https://pokeapi.co/api/v2';

export const findPokemon = async query => {
  try {
    const res = await axios.get(`/pokemon/${query}`);
  } catch (error) {
    console.log(error.message);
  }
};
