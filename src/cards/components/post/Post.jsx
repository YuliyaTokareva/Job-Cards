import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import StarIcon from '../../../img/star-icon.png';
import ShareIcon from '../../svg/ShareIcon';

import { formaterDateToShedule } from '../../../utils/dateUtils';
import * as jobsActions from '../../job.actions';
import * as jobSelectors from '../../job.selectors';
import PostDescriptionHeader from '../postDescriptionHeader/PostDescriptionHeader';
import Aside from '../aside/Aside';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';
import './post.scss';

const Post = ({ jobList, getJobList }) => {
  const { pathname } = useLocation();
  const postId = pathname.slice(1);
  useEffect(() => {
    getJobList();
  }, []);
  const postData = jobList.filter((post) => post.id === postId)[0];
  if (!postData) {
    return '';
  }
  return (
    <>
      <div className="job">
        <div className="mine-text">
          <section className="vacancy">
            <div className="vacancy__header">
              <h1 className="vacancy__title">Job Details</h1>
              <div className="vacancy__buttons desktop">
                <button className="vacancy__button vacancy__selected">
                  <img src={`${StarIcon}`} alt="star-icon" className="vacancy__button-icon-star" />
                  Save to my list
                </button>
                <button className="vacancy__button vacancy__share">
                  <ShareIcon />
                  Share
                </button>
              </div>
            </div>

            <div className="title-line"></div>
            <div className="title-line__top-button desktop">
              <button className="button">Apply now</button>
            </div>
            <div className="vacancy__buttons mob">
              <button className="vacancy__button vacancy__selected">
                <img src={`${StarIcon}`} alt="star-icon" className="vacancy__button-icon-star" />
                <span>Save to my list</span>
              </button>
              <button className="vacancy__button vacancy__share">
                <ShareIcon />
                Share
              </button>
            </div>
            <PostDescriptionHeader postData={postData} />
          </section>
          <section className="vacancy-requirements">
            <p className="vacancy-requirements__text">{postData.description}</p>
            <div className="vacancy-requirements__button-block">
              <button className="vacancy-requirements__button-aply button">Apply now</button>
            </div>
          </section>
          <Slider postData={postData} />
          <section className="additional-info">
            <h2 className="additional-info__title title">Additional info</h2>
            <div className="title-line"></div>
            <div className="additional-info__employment">
              <h4 className="additional-info__option-name">Employment type</h4>
              <ul className="additional-info__option-items">
                {postData.employment_type.map((type) => (
                  <li className="additional-info__option-item" key={type}>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            <div className="additional-info__benefits">
              <h4 className="additional-info__option-name">Benefits</h4>
              <ul className="additional-info__benefits-items">
                {postData.benefits.map((type) => (
                  <li className="additional-info__benefits-item" key={type}>
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
        <Aside postData={postData} />
      </div>
      <Footer />
    </>
  );
};
Post.propTypes = {
  getJobList: PropTypes.func.isRequired,
  jobList: PropTypes.array,
  formaterDateToShedule: PropTypes.func.isRequired
};
const mapDispatch = (dispatch) => {
  return {
    getJobList: () => dispatch(jobsActions.getJobList()),
    formaterDateToShedule: (time) => formaterDateToShedule(time)
  };
};
const mapState = (state) => {
  return {
    jobList: jobSelectors.jobListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Post);
