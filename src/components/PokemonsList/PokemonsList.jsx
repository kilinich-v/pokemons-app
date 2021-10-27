import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pokemonSelectors, getPokemon } from '../../redux/pokemons';

import styles from './styles.module.scss';

const PokemonsList = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonSelectors.getPokemons);

  const isLoading = useSelector(pokemonSelectors.isLoading);

  return (
    <div>
      {pokemons?.map(({ name, url }) => (
        <div onClick={() => dispatch(getPokemon(url))} key={name}>
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsList;
