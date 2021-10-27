import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPokemons } from '../redux/pokemons';

import SearchBar from '../components/SearchBar';
import PokemonsList from '../components/PokemonsList';
import PokemonModal from '../components/PokemonModal';

export const PokemonsFindView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <div>
      <SearchBar />
      <PokemonsList />
      <PokemonModal />
    </div>
  );
};
