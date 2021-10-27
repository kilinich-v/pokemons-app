import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { pokemonSelectors, getPokemon } from '../../redux/pokemons';

import styles from './styles.module.scss';

const PokemonModal = () => {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);

  const pokemon = useSelector(pokemonSelectors.getPokemon);

  return (
    <>
      {isOpen && pokemon && (
        <div className={styles.modalWrapper}>
          <div className={styles.container}>
            <div className={styles.pokemonWrapper}>
              <div className={styles.close} onClick={() => setOpen(false)}>
                x
              </div>
              <div className={styles.baseInfo}>
                <img
                  src={pokemon.sprites.front_default}
                  alt={`${pokemon.name}'s avatar`}
                  className={styles.avatar}
                />
                <p className={styles.name}>{pokemon.name}</p>
              </div>
              <div className={styles.stats}></div>
              <div className={styles.moves}></div>
            </div>
          </div>
          <div className={styles.backDrop}></div>
        </div>
      )}
    </>
  );
};

export default PokemonModal;
