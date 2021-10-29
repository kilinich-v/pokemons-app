import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import {
  pokemonSelectors,
  getPokemon,
  clearErrors
} from '../../redux/pokemons';

import ListView from '../ListView';
import Pagination from '../Pagination';

import styles from './styles.module.scss';

const PokemonsList = () => {
  const dispatch = useDispatch();

  const [currentView, setCurrentView] = useState('viewList');

  const pokemons = useSelector(pokemonSelectors.getPokemons);
  const loadPokemonsList = useSelector(pokemonSelectors.loadPokemonsList);
  const pokemonsCount = useSelector(pokemonSelectors.getPokemonCount);
  const error = useSelector(pokemonSelectors.error);

  return (
    <div className={styles.container}>
      <ListView currentView={currentView} setCurrentView={setCurrentView} />
      {error && <p>{error}</p>}
      <Pagination total={pokemonsCount} perPage={20} />
      {loadPokemonsList ? (
        <div className={styles.spinnerWrapper}>
          <PulseLoader color={'#f6ac29'} />
        </div>
      ) : (
        <ul className={`${styles.list} ${styles[currentView]}`}>
          {pokemons?.map(({ name, url }) => {
            const formatName = name[0].toUpperCase() + name.slice(1);

            return (
              <div
                className={styles.item}
                onClick={() => dispatch(getPokemon(url))}
                key={name}>
                <p className={styles.name}>{formatName}</p>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PokemonsList;
