import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pokemonSelectors, getPokemon } from '../../redux/pokemons';

import ListView from '../ListView';
import Pagination from '../Pagination';

import styles from './styles.module.scss';

const PokemonsList = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonSelectors.getPokemons);
  const pokemonsCount = useSelector(pokemonSelectors.getPokemonCount);

  const isLoading = useSelector(pokemonSelectors.isLoading);

  return (
    <div>
      <ListView />
      {pokemons?.map(({ name, url }) => (
        <div onClick={() => dispatch(getPokemon(url))} key={name}>
          <p>{name}</p>
        </div>
      ))}
      <Pagination total={pokemonsCount} perPage={20} />
    </div>
  );
};

export default PokemonsList;
