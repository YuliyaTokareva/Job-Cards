import React from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
// import FirstImg from '../../../img/icon-location.png';
// import BookmarkIcon from '../../svg/BookmarkIcon';
// import StarRating from '../../svg/StarRating';
// import LocationIcon from '../../svg/LocationIcon';
import StarIcon from '../../../img/star-icon.png';
import StaffImage from '../../../img/staff-image.jpg';
import BitmapImage from '../../../img/bitmap-images.jpg';
import CityImage from '../../../img/city-images.jpg';
import mapImage from '../../../img/map.jpg';

// import PaginationArrowIcon from '../../svg/PaginationArrowIcon';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import * as jobSelectors from '../../job.selectors';
import Footer from '../footer/Footer';
import './post.scss';
const Post = ({ jobList }) => {
  const { pathname } = useLocation();
  const postId = pathname.slice(1);
  const { id } = useParams();
  const postData = jobList.filter((post) => post.id === postId)[0];
  return (
    <>
      {console.log(jobList)}

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
                  <svg
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="vacancy__share-icon">
                    <path
                      opacity="0.8"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.04 14.9096L5.91 10.743C5.96 10.512 6 10.2811 6 10.0402C6 9.7992 5.96 9.56827 5.91 9.33735L12.96 5.21084C13.5 5.71285 14.21 6.0241 15 6.0241C16.66 6.0241 18 4.67871 18 3.01205C18 1.34538 16.66 0 15 0C13.34 0 12 1.34538 12 3.01205C12 3.25301 12.04 3.48394 12.09 3.71486L5.04 7.84137C4.5 7.33936 3.79 7.02811 3 7.02811C1.34 7.02811 0 8.37349 0 10.0402C0 11.7068 1.34 13.0522 3 13.0522C3.79 13.0522 4.5 12.741 5.04 12.239L12.16 16.4157C12.11 16.6265 12.08 16.8474 12.08 17.0683C12.08 18.6847 13.39 20 15 20C16.61 20 17.92 18.6847 17.92 17.0683C17.92 15.4518 16.61 14.1365 15 14.1365C14.24 14.1365 13.56 14.4378 13.04 14.9096Z"
                      fill="#38415D"
                    />
                  </svg>
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
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="vacancy__share-icon">
                  <path
                    opacity="0.8"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.04 14.9096L5.91 10.743C5.96 10.512 6 10.2811 6 10.0402C6 9.7992 5.96 9.56827 5.91 9.33735L12.96 5.21084C13.5 5.71285 14.21 6.0241 15 6.0241C16.66 6.0241 18 4.67871 18 3.01205C18 1.34538 16.66 0 15 0C13.34 0 12 1.34538 12 3.01205C12 3.25301 12.04 3.48394 12.09 3.71486L5.04 7.84137C4.5 7.33936 3.79 7.02811 3 7.02811C1.34 7.02811 0 8.37349 0 10.0402C0 11.7068 1.34 13.0522 3 13.0522C3.79 13.0522 4.5 12.741 5.04 12.239L12.16 16.4157C12.11 16.6265 12.08 16.8474 12.08 17.0683C12.08 18.6847 13.39 20 15 20C16.61 20 17.92 18.6847 17.92 17.0683C17.92 15.4518 16.61 14.1365 15 14.1365C14.24 14.1365 13.56 14.4378 13.04 14.9096Z"
                    fill="#38415D"
                  />
                </svg>
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
              <p className="vacancy__time">Posted {formaterDateToShedule(postData.createdAt)}</p>
              <div className="vacancy__salary mob">
                <p className="vacancy__salary-date">Brutto, per year</p>
                <p className="vacancy__salary-price">€ 54 000—60 000</p>
              </div>
            </div>
          </section>
          <section className="vacancy-requirements">
            <p className="vacancy-requirements__text">
              At WellStar, we all share common goals. That’s what makes us so successful – and such
              an integral part of our communities. We want the same things, for our organization,
              for our patients, and for our colleagues. As the most integrated healthcare provider
              in Georgia, this means we pride ourselves on investing in the communities that we
              serve. We continue to provide innovative care models, focused on improving quality and
              access to healthcare. Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join
              their existing cardiovascular program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons. The ideal candidate will have
              five or more years of experience in cardiac surgery. This candidate should be facile
              with off-pump revascularization, complex aortic surgery, minimally invasive valve and
              valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation,
              ventricular assist device placement, and extra corporeal membrane oxygenation.
              Wellstar is one of the largest integrated healthcare systems in the Southeast with 11
              hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional
              Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200
              cardiac procedures per year. The cardiac service line is the only center in Georgia
              with the Joint Commission’s Comprehensive Cardiac Center certification. Our physicians
              enjoy a wide range of benefits, including: Very competitive compensation package with
              bbbbonuses Medical, Dental, and Vision Insurance Occurrence-based Malpractice Coverage
              Short-term and Long-term Disability Insurance Life insurance
            </p>
            <h3 className="vacancy-requirements__title title-responsopilities">Responsopilities</h3>
            <p className="vacancy-requirements__text">
              At WellStar, we all share common goals. That’s what makes us so successful – and such
              an integral part of our communities. We want the same things, for our organization,
              for our patients, and for our colleagues. As the most integrated healthcare provider
              in Georgia, this means we pride ourselves on investing in the communities that we
              serve. We continue to provide innovative care models, focused on improving quality and
              access to healthcare. Wellstar Medical Group, a physician-led multi-specialty group in
              Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic surgeon to join
              their existing cardiovascular program. This is an opportunity to play a key role on a
              multidisciplinary team of cardiologists and surgeons. The ideal candidate will have
              five or more years of experience in cardiac surgery. This candidate should be facile
              with off-pump revascularization, complex aortic surgery, minimally invasive valve and
              valve repair, transcatheter valve replacement, surgical atrial fibrillation ablation,
              ventricular assist device placement, and extra corporeal membrane oxygenation.
              Wellstar is one of the largest integrated healthcare systems in the Southeast with 11
              hospitals in Atlanta metro region. With two open heart programs at Kennestone Regional
              Medical Center and Atlanta Medical Center, Wellstar cardiac surgeons perform over 1200
              cardiac procedures per year. The cardiac service line is the only center in Georgia
              with the Joint Commission’s Comprehensive Cardiac Center certification. Our physicians
              enjoy a wide range of benefits, including: Very competitive compensation package with
              bbbbonuses Medical, Dental, and Vision Insurance Occurrence-based Malpractice Coverage
              Short-term and Long-term Disability Insurance Life insurance
            </p>
            <h3 className="vacancy-requirements__title title-compensation">
              Compensation & Benefits:
            </h3>
            <p className="vacancy-requirements__text text-compensation">
              Our physicians enjoy a wide range of benefits, including:
            </p>
            <ul className="vacancy-requirements__text-list">
              <li>
                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia,
                is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing
                cardiovascular program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
              </li>
              <li>
                Wellstar Medical Group, a physician-led multi-specialty group in Atlanta, Georgia,
                is currently recruiting for a BC/BE cardiothoracic surgeon to join their existing
                cardiovascular program. This is an opportunity to play a key role on a
                multidisciplinary team of cardiologists and surgeons.
              </li>
              <li>Very competitive compensation package with bbbbonuses</li>
            </ul>
            <div className="vacancy-requirements__button-block">
              <button className="vacancy-requirements__button-aply button">Apply now</button>
            </div>
          </section>
          <section className="slider">
            <h2 className="slider__title title">Attached images</h2>
            <div className="title-line"></div>
            <div className="slider__image">
              <img src={`${StaffImage}`} alt="staff" />
              <img src={`${BitmapImage}`} alt="rewarding" />
              <img src={`${CityImage}`} alt="city" className="desktop" />
            </div>
          </section>
          <section className="additional-info">
            <h2 className="additional-info__title title">Additional info</h2>
            <div className="title-line"></div>
            <div className="additional-info__employment">
              <h4 className="additional-info__option-name">Employment type</h4>
              <ul className="additional-info__option-items">
                <li className="additional-info__option-item">Full-time</li>
                <li className="additional-info__option-item">Part-time</li>
                <li className="additional-info__option-item">Temporary</li>
              </ul>
            </div>
            <div className="additional-info__benefits">
              <h4 className="additional-info__option-name">Benefits</h4>
              <ul className="additional-info__benefits-items">
                <li className="additional-info__benefits-item">Flexible shedule</li>
                <li className="additional-info__benefits-item">Relocation assistance</li>
              </ul>
            </div>
          </section>
        </div>
        <aside className="contacts">
          <h2 className="contacts__title title mob">Contacts</h2>
          <div className="title-line mob"></div>
          <div className="contscts__data">
            <div className="contscts__text-info">
              <p className="contscts__name">Department name. University Hospital Giessen.</p>
              <div className="contscts__street">
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                    fill="#878D9D"
                  />
                </svg>
                <p className="contscts__street-text">AKH Wien, 1090 Wien, Währinger Gürtel 18-20</p>
              </div>

              <a href="tel:+43014040012090" className="contscts__phone">
                +43 (01) 40400-12090,
              </a>
              <a href="mailto:post_akh_diz@akhwien.at" className="contscts__mail">
                post_akh_diz@akhwien.at
              </a>
            </div>
            <div className="contscts__map">
              <svg
                width="13"
                height="18"
                viewBox="0 0 13 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.5 18C6.5 18 13 11.9706 13 7C13 2.02944 10.0899 0 6.5 0C2.91015 0 0 2.02944 0 7C0 11.9706 6.5 18 6.5 18ZM6.5 10C8.433 10 10 8.433 10 6.5C10 4.567 8.433 3 6.5 3C4.567 3 3 4.567 3 6.5C3 8.433 4.567 10 6.5 10Z"
                  fill="#878D9D"
                />
              </svg>
              <img src={`${mapImage}`} alt="map" className="contscts__map-img" />
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </>
  );
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
export default connect(mapState, mapDispatch)(Post);
