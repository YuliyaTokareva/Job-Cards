import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { formaterDateToShedule } from '../../../utils/dateUtils';
import * as jobsActions from '../../job.actions';
import * as jobSelectors from '../../job.selectors';
import PostDescriptionHeader from '../postDescriptionHeader/PostDescriptionHeader';
import Aside from '../aside/Aside';
import Slider from '../slider/Slider';
import Footer from '../footer/Footer';
import PostLine from '../postLine/PostLine';
// import ShareButtons from '../shareButtons/ShareButtons';
// import ButtonApply from '../buttonApply/ButtonApply';
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
              <div className="vacancy__buttons ">{/* <ShareButtons /> */}</div>
              <hr className="title-line top-page" />
              {/* <ButtonApply /> */}
            </div>
            <PostDescriptionHeader postData={postData} />
          </section>
          <section className="vacancy-requirements">
            <p className="vacancy-requirements__text">{postData.description}</p>
            <div className="vacancy-requirements__button-block">{/* <ButtonApply /> */}</div>
          </section>
          <Slider postData={postData} />
          <section className="additional-info">
            <h2 className="additional-info__title title">Additional info</h2>
            <PostLine />
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
