import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getPokemons } from '../../redux/pokemons';

import styles from './styles.module.scss';

const Pagination = ({ total, perPage }) => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setPageCount(Math.ceil(total / perPage));
  }, [total, perPage]);

  useEffect(() => {
    dispatch(getPokemons(perPage, currentPage * perPage));
  }, [currentPage]);

  return (
    <div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={styles.pagination}
        previousLinkClassName={styles.prevBtn}
        nextLinkClassName={styles.nextBtn}
        disabledClassName={styles.disabled}
        activeClassName={styles.active}
      />
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number
};
