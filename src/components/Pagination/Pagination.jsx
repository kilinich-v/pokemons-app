import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getPokemons, pokemonSelectors } from '../../redux/pokemons';

import styles from './styles.module.scss';

const Pagination = ({ handlePage, perPage }) => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const total = useSelector(pokemonSelectors.getPokemonCount);
  const pokemonsFromTypes = useSelector(pokemonSelectors.getPokemonsFromTypes);

  const changePage = e => {
    console.log(e);
    setCurrentPage(e.selected + 1);
  };

  useEffect(() => {
    setPageCount(Math.ceil(total / perPage));
  }, [total, pokemonsFromTypes]);

  useEffect(() => {
    if (pokemonsFromTypes) {
      setPageCount(Math.ceil(pokemonsFromTypes.length / perPage));
    }

    setCurrentPage(1);
  }, [pokemonsFromTypes]);

  useEffect(() => {
    if (!pokemonsFromTypes) {
      dispatch(getPokemons(perPage, currentPage * perPage));
    }

    handlePage(currentPage);
  }, [currentPage]);

  return (
    <div>
      <ReactPaginate
        forcePage={currentPage - 1}
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.prevBtn}
        nextLinkClassName={styles.nextBtn}
        disabledClassName={styles.disabled}
        activeClassName={styles.active}
        eventListener={'onClick'}
      />
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  handlePage: PropTypes.func,
  perPage: PropTypes.number
};
