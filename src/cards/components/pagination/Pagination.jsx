import React from 'react';
import PaginationArrowIcon from '../../svg/PaginationArrowIcon';
import '../pagination/pagination.scss';

const Pagination = () => {
  return (
    <section className="pagination">
      <button className="pagination__button left">
        <PaginationArrowIcon />
      </button>
      <div className="pagination__numbers">
        <ul className="pagination__list">
          <li className="pagination__number">
            <a href="#">1</a>
          </li>
          <li className="pagination__number active">
            <a href="#">2</a>
          </li>
          <li className="pagination__number">
            <a href="#">3</a>
          </li>
          <li className="pagination__number">
            <a href="#">4</a>
          </li>
          <li className="pagination__number">
            <a href="#">5</a>
          </li>
          <li className="pagination__number">
            <a href="#">...</a>
          </li>
          <li className="pagination__number">
            <a href="#">18</a>
          </li>
        </ul>
      </div>

      <button className="pagination__button right">
        <PaginationArrowIcon />
      </button>
    </section>
  );
};

export default Pagination;
