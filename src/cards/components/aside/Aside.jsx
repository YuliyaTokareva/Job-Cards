import React from 'react';

import mapImage from '../../../img/map.jpg';
import MapIcon from '../../svg/MapIcon';

import '../post/post.scss';
const Aside = ({ postData }) => {
  if (!postData) {
    return '';
  }
  return (
    <aside className="contacts">
      <h2 className="contacts__title title mob">Contacts</h2>
      <div className="title-line mob"></div>
      <div className="contacts__data">
        <div className="contacts__text-info">
          <p className="contacts__name">{postData.name}</p>
          <div className="contacts__street">
            <MapIcon />
            <p className="contacts__street-text">{postData.address}</p>
          </div>

          <a href={`tel:${postData.phone}`} className="contacts__phone">
            {postData.phone},
          </a>
          <a href={`mailto:${postData.email}`} className="contacts__mail">
            {postData.email}
          </a>
        </div>
        <div className="contacts__map">
          <MapIcon />
          <img src={`${mapImage}`} alt="map" className="contacts__map-img" />
        </div>
      </div>
    </aside>
  );
};
// Post.propTypes = {
//   getJobList: PropTypes.func.isRequired,
//   jobList: PropTypes.array,
//   formaterDateToShedule: PropTypes.func.isRequired
// };
// const mapDispatch = (dispatch) => {
//   return {
//     getJobList: () => dispatch(jobsActions.getJobList()),
//     formaterDateToShedule: (time) => formaterDateToShedule(time)
//   };
// };
// const mapState = (state) => {
//   return {
//     jobList: jobSelectors.jobListSelector(state)
//   };
// };
export default Aside;
