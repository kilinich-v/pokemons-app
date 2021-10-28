import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';

import { getPokemons } from '../../redux/pokemons';

import styles from './styles.module.scss';

const Pagination = ({ total, perPage }) => {
  const dispatch = useDispatch();

  const [pageCount, setPageCount] = useState();
  const [currentPage, setCurrentPage] = useState(null);

  const changePage = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setPageCount(Math.ceil(total / perPage));
  }, [total, perPage]);

  useEffect(() => {
    if (currentPage > 1) {
      dispatch(getPokemons(perPage, currentPage * perPage));
    }
  }, [currentPage]);

  return (
    <div>
      <ReactPaginate
        previousLabel={'Previous'}
        nextLabel={'Next'}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={'pagination'}
        previousLinkClassName={'prevBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'disabled'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default Pagination;

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number
};
