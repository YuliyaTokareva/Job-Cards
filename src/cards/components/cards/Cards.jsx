import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import BookmarkIcon from '../../svg/BookmarkIcon';
import StarRating from '../../svg/StarRating';
import LocationIcon from '../../svg/LocationIcon';
import Pagination from '../pagination/Pagination';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import * as jobSelectors from '../../job.selectors';

import './cards.scss';

const Cards = ({ jobList }) => {
  const starsRating = Array(5)
    .fill()
    .map((e, i) => i + 1);

  return (
    <>
      {jobList.map((job) => {
        return (
          <article key={job.id} className="card">
            <img
              src={`${job.pictures[0]}.jpg?random&dummyParam=${job.id}`}
              alt="logo"
              className="carad__logo"></img>
            <div className="card__text">
              <div className="card__header mob">
                <div className="card__rating">
                  {starsRating.map((el) => (
                    <StarRating key={el} />
                  ))}
                </div>
                <p className="card__header-text">Posted {formaterDateToShedule(job.createdAt)}</p>
              </div>
              <h2 className="card__title">
                <NavLink to={`/${job.id}`} className="card__title-link">
                  {job.title}
                </NavLink>
              </h2>
              <p className="card__description">{`Department name • ${job.name}`}</p>
              <div className="card__location">
                <span className="card__location-icon">
                  <LocationIcon />
                </span>
                <p className="card__location-description">{job.address}</p>
              </div>
            </div>
            <div className="rating desktop">
              {starsRating.map((el) => (
                <StarRating key={el} />
              ))}
            </div>
            <div className="bookmark desktop">
              <BookmarkIcon />
              <p className="bookmark__text">Posted {formaterDateToShedule(job.createdAt)}</p>
            </div>
          </article>
        );
      })}
      <Pagination />
    </>
  );
};
Cards.propTypes = {
  jobList: PropTypes.array,
  formaterDateToShedule: PropTypes.func.isRequired
};
const mapDispatch = (dispatch) => {
  return {
    formaterDateToShedule: (time) => formaterDateToShedule(time)
  };
};

const mapState = (state) => {
  return {
    jobList: jobSelectors.jobListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Cards);
