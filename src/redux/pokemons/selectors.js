const getPokemons = state => state.pokeStore.pokemons.results;
const getNextPage = state => state.pokeStore.pokemons.next;
const getPrevPage = state => state.pokeStore.pokemons.previous;

const getPokemon = state => state.pokeStore.pokemon;

const isLoading = state => state.pokeStore.isLoading;

export default {
  getPokemons,
  getNextPage,
  getPrevPage,
  getPokemon,
  isLoading
};
