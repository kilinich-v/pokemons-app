import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonsList from '../components/PokemonsList';

export const PokemonsFindView = () => {
  const [query, setQuery] = useState(null);
  const [pokemonsData, setPokemonsData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);

  return (
    <div>
      <SearchBar />
      <PokemonsList />
    </div>
  );
};
