import React from 'react';
import PostLine from '../postLine/PostLine';
import './slider.scss';

const Slider = ({ postData }) => {
  if (!postData) {
    return '';
  }
  return (
    <section className="slider">
      <h2 className="slider__title title">Attached images</h2>
      <PostLine />
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
export default Slider;
