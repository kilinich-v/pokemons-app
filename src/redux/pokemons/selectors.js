const getPokemons = state => state.pokemons.results;
const getPokemonsFromTypes = state => state.pokemonsFromTypes;
const getPokemonCount = state => state.pokemons.count;

const getPokemon = state => state.pokemon;

const getTypes = state => state.types;

const loadPokemonsList = state => state.loadPokemonsList;
const loadPokemon = state => state.loadPokemon;

const error = state => state.error;

export default {
  getPokemons,
  getPokemonsFromTypes,
  getPokemonCount,
  getPokemon,
  getTypes,
  loadPokemonsList,
  loadPokemon,
  error
};
