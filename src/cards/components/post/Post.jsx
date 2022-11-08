import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import StarIcon from '../../../img/star-icon.png';
import mapImage from '../../../img/map.jpg';
import MapIcon from '../../svg/MapIcon';
import ShareIcon from '../../svg/ShareIcon';

import { formaterDateToShedule } from '../../../utils/dateUtils';
import * as jobsActions from '../../job.actions';
import * as jobSelectors from '../../job.selectors';
import Footer from '../footer/Footer';
import './post.scss';
const Post = ({ jobList, getJobList }) => {
  const { pathname } = useLocation();
  const postId = pathname.slice(1);
  useEffect(() => {
    getJobList();
  }, []);
  const postData = jobList.filter((post) => post.id === postId)[0];
  return (
    <>
      {!postData ? (
        ''
      ) : (
        <>
          <div className="job">
            <div className="mine-text">
              <section className="vacancy">
                <div className="vacancy__header">
                  <h1 className="vacancy__title">Job Details</h1>
                  <div className="vacancy__buttons desktop">
                    <button className="vacancy__button vacancy__selected">
                      <img
                        src={`${StarIcon}`}
                        alt="star-icon"
                        className="vacancy__button-icon-star"
                      />
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
                    <img
                      src={`${StarIcon}`}
                      alt="star-icon"
                      className="vacancy__button-icon-star"
                    />

                    <span>Save to my list</span>
                  </button>
                  <button className="vacancy__button vacancy__share">
                    <ShareIcon />
                    Share
                  </button>
                </div>
                <div className="vacancy__description-block">
                  <p className="vacancy__description">{postData.title}</p>
                  <div className="vacancy__salary desktop">
                    <p className="vacancy__salary-price">€ {postData.salary}</p>
                    <p className="vacancy__salary-date">Brutto, per year</p>
                  </div>
                </div>
                <div className="vacancy__data">
                  <p className="vacancy__time">
                    Posted {formaterDateToShedule(postData.createdAt)}
                  </p>
                  <div className="vacancy__salary mob">
                    <p className="vacancy__salary-date">Brutto, per year</p>
                    <p className="vacancy__salary-price">€ {postData.salary}</p>
                  </div>
                </div>
              </section>
              <section className="vacancy-requirements">
                <p className="vacancy-requirements__text">{postData.description}</p>
                <div className="vacancy-requirements__button-block">
                  <button className="vacancy-requirements__button-aply button">Apply now</button>
                </div>
              </section>
              <section className="slider">
                <h2 className="slider__title title">Attached images</h2>
                <div className="title-line"></div>
                <div className="slider__image">
                  {postData.pictures.map((img) => {
                    return (
                      <img
                        src={`${img}.jpg?random&dummyParam=${Math.floor(Math.random() * 100)}`}
                        alt="attached image"
                        key={Math.floor(Math.random() * 100)}
                      />
                    );
                  })}
                </div>
              </section>
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
            <aside className="contacts">
              <h2 className="contacts__title title mob">Contacts</h2>
              <div className="title-line mob"></div>
              <div className="contscts__data">
                <div className="contscts__text-info">
                  <p className="contscts__name">{postData.name}</p>
                  <div className="contscts__street">
                    <MapIcon />
                    <p className="contscts__street-text">{postData.address}</p>
                  </div>

                  <a href={`tel:${postData.phone}`} className="contscts__phone">
                    {postData.phone},
                  </a>
                  <a href={`mailto:${postData.email}`} className="contscts__mail">
                    {postData.email}
                  </a>
                </div>
                <div className="contscts__map">
                  <MapIcon />
                  <img src={`${mapImage}`} alt="map" className="contscts__map-img" />
                </div>
              </div>
            </aside>
          </div>
          <Footer />
        </>
      )}
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
