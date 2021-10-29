const getPokemons = state => state.pokemons.results;
const getPokemonCount = state => state.pokemons.count;

const getPokemon = state => state.pokemon;

const loadPokemonsList = state => state.loadPokemonsList;
const loadPokemon = state => state.loadPokemon;

const error = state => state.error;

export default {
  getPokemons,
  getPokemonCount,
  getPokemon,
  loadPokemonsList,
  loadPokemon,
  error
};
