import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import FirstImg from '../../../img/icon-location.png';
import BookmarkIcon from '../../svg/BookmarkIcon';
import StarRating from '../../svg/StarRating';
import LocationIcon from '../../svg/LocationIcon';
import PaginationArrowIcon from '../../svg/PaginationArrowIcon';
import * as jobsActions from '../../job.actions';
import * as jobSelectors from '../../job.selectors';
import './cards.scss';
const Cards = ({ jobList }) => {
  return (
    <>
      {jobList.map((job) => {
        return (
          <article key={job.id} className="card">
            <img src={job.pictures[1]} alt="logo" className="carad__logo"></img>
            <div className="card__text">
              <div className="card__header mob">
                <div className="card__rating">
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                  <StarRating />
                </div>
                <p className="card__header-text">Posted {formaterDateToShedule(job.createdAt)}</p>
              </div>
              <h2 className="card__title">
                <NavLink to={`/${job.id}`} className="card__title-link">
                  {job.title}
                </NavLink>
              </h2>
              <p className="card__description">
                Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
              </p>
              <div className="card__location">
                <span className="card__location-icon">
                  <LocationIcon />
                </span>
                <p className="card__location-description">Vienna, Austria</p>
              </div>
            </div>
            <div className="rating desktop">
              <StarRating />
              <StarRating />
              <StarRating />
              <StarRating />
              <StarRating />
            </div>
            <div className="bookmark desktop">
              <BookmarkIcon />
              <p className="bookmark__text">Posted {formaterDateToShedule(job.createdAt)}</p>
            </div>
          </article>
        );
      })}
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
    </>
  );
};
const mapDispatch = (dispatch) => {
  return {
    // getJobList: () => dispatch(jobsActions.getJobList()),
    formaterDateToShedule: (time) => formaterDateToShedule(time)
  };
};

const mapState = (state) => {
  return {
    jobList: jobSelectors.jobListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Cards);
