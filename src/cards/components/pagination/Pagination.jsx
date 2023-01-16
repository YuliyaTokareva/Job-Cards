import React from 'react';
import PaginationArrowIcon from '../../svg/PaginationArrowIcon';
import './pagination.scss';

const Pagination = () => {
  const paginationPage = Array(18)
    .fill(0)
    .map((_, i) => i + 1);
  return (
    <section className="pagination">
      <button className="pagination__button left">
        <PaginationArrowIcon />
      </button>
      <div className="pagination__numbers">
        <ul className="pagination__list">
          {paginationPage.map((el, index) => {
            if (index <= 4) {
              return (
                <li
                  className={index === 2 ? 'pagination__number active' : 'pagination__number'}
                  key={index}>
                  <a href="#">{el}</a>
                </li>
              );
            }
          })}
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
