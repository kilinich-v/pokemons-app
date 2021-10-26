import React, { useState } from 'react';
import styles from './styles.module.scss';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState(null);

  const handleInput = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    // onSubmit(inputValue);
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
