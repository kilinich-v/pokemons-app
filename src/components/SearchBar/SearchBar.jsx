import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getPokemon } from '../../redux/pokemons';

import styles from './styles.module.scss';

const SearchBar = () => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(getPokemon(inputValue));
  };

  return (
    <div className={styles.container}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type='text'
          value={inputValue}
          autoComplete='off'
          autoFocus
          placeholder='Search pokemon...'
          onChange={handleInput}
        />
        <button type='submit' className={styles.button}>
          Find
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
