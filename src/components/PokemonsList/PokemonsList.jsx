import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import {
  pokemonSelectors,
  getPokemon,
  getPokemons
} from '../../redux/pokemons';

import FilterPokemons from '../FilterPokemons/FilterPokemons';
import ListView from '../ListView';
import Pagination from '../Pagination';

import styles from './styles.module.scss';

const ITEMS_PER_PAGE = 20;

const PokemonsList = () => {
  const dispatch = useDispatch();

  const [currentView, setCurrentView] = useState('viewList');
  const [page, setPage] = useState(null);

  const pokemons = useSelector(pokemonSelectors.getPokemons);
  const pokemonsFromTypes = useSelector(pokemonSelectors.getPokemonsFromTypes);
  const loadPokemonsList = useSelector(pokemonSelectors.loadPokemonsList);
  const error = useSelector(pokemonSelectors.error);

  const handlePage = page => {
    setPage(page);
  };

  const printPokemons = (
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
  );

  const printPokemonsFromType = (
    <ul className={`${styles.list} ${styles[currentView]}`}>
      {pokemonsFromTypes?.map(({ pokemon: { name, url } }, index) => {
        const formatName = name[0].toUpperCase() + name.slice(1);

        if (
          index < ITEMS_PER_PAGE * page &&
          index > ITEMS_PER_PAGE * (page - 1)
        ) {
          return (
            <div
              className={styles.item}
              onClick={() => dispatch(getPokemon(url))}
              key={name}>
              <p className={styles.name}>{formatName}</p>
            </div>
          );
        }
      })}
    </ul>
  );

  return (
    <div className={styles.container}>
      <FilterPokemons />
      <ListView currentView={currentView} setCurrentView={setCurrentView} />
      {error && <p>{error}</p>}
      <Pagination handlePage={handlePage} perPage={ITEMS_PER_PAGE} />
      {loadPokemonsList ? (
        <div className={styles.spinnerWrapper}>
          <PulseLoader color={'#f6ac29'} />
        </div>
      ) : pokemonsFromTypes ? (
        printPokemonsFromType
      ) : (
        printPokemons
      )}
    </div>
  );
};

export default PokemonsList;
