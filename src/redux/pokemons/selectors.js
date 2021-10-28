const getPokemons = state => state.pokemons.results;
const getPokemonCount = state => state.pokemons.count;

const getPokemon = state => state.pokemon;

const isLoading = state => state.isLoading;

export default {
  getPokemons,
  getPokemonCount,
  getPokemon,
  isLoading
};
