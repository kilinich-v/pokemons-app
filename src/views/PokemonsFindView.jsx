import React from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from '../components/SearchBar';
import PokemonsList from '../components/PokemonsList';
import PokemonModal from '../components/PokemonModal';

export const PokemonsFindView = () => {
  return (
    <div>
      <SearchBar />
      <PokemonsList />
      <PokemonModal />
    </div>
  );
};
