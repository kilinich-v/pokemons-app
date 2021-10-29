import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  getPokemons,
  getTypes,
  pokemonSelectors,
  getPokemonsFromType,
  removePokemonsFromTypes
} from '../../redux/pokemons';

import styles from './styles.module.scss';

const FilterPokemons = () => {
  const dispatch = useDispatch();

  const [currentType, setCurrentType] = useState(null);

  const types = useSelector(pokemonSelectors.getTypes);

  const handleReset = () => {
    dispatch(getPokemons());
    dispatch(removePokemonsFromTypes());
    setCurrentType(null);
  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  useEffect(() => {
    if (currentType) {
      dispatch(getPokemonsFromType(currentType));
    }
  }, [currentType]);

  return (
    <div>
      <p>Pokemon types</p>
      <select
        value={currentType ? currentType : 'Choose type'}
        onChange={e => setCurrentType(e.target.value)}>
        <option value=''>Choose type</option>
        {types?.map(({ name, url }) => (
          <option value={url} key={name}>
            {name}
          </option>
        ))}
      </select>
      <button onClick={handleReset} type='button'>
        Reset types
      </button>
    </div>
  );
};

export default FilterPokemons;
