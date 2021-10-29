import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PulseLoader from 'react-spinners/PulseLoader';

import { pokemonSelectors, removePokemon } from '../../redux/pokemons';

import styles from './styles.module.scss';

const PokemonModal = () => {
  const dispatch = useDispatch();

  const [isOpen, setOpen] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const pokemon = useSelector(pokemonSelectors.getPokemon);

  const handleCloseModal = () => {
    dispatch(removePokemon());
    setOpen(false);
    setImageLoading(true);
  };

  useEffect(() => {
    setOpen(true);
  }, [pokemon]);

  return (
    <>
      {isOpen && pokemon && (
        <div className={styles.modalWrapper}>
          <div className={styles.container}>
            <div className={styles.pokemonWrapper}>
              <div className={styles.close} onClick={handleCloseModal}>
                x
              </div>
              <div className={styles.baseInfo}>
                <div className={styles.imageWrapper}>
                  {imageLoading && <PulseLoader color={'#f6ac29'} />}
                  <img
                    src={pokemon.sprites.front_default}
                    alt={`${pokemon.name}'s avatar`}
                    className={styles.avatar}
                    onLoad={() => setImageLoading(false)}
                  />
                </div>
                <p className={styles.name}>{pokemon.name}</p>
              </div>
              <div className={`${styles.blockWrapper} ${styles.stats}`}>
                <p className={styles.blockTitle}>stats</p>
                <ul className={styles.listItem}>
                  {pokemon.stats.map(({ base_stat, stat }) => (
                    <li key={stat.name}>
                      <span>{stat.name}</span> - {base_stat}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${styles.blockWrapper} ${styles.moves}`}>
                <p className={styles.blockTitle}>moves</p>
                <ul className={styles.listItem}>
                  {pokemon.moves.map(({ move }) => (
                    <li key={move.name}>{move.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.backDrop}></div>
        </div>
      )}
    </>
  );
};

export default PokemonModal;
