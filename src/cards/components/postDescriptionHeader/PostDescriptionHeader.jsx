import React from 'react';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import '../post/post.scss';

const PostDescriptionHeader = ({ postData }) => {
  if (!postData) {
    return '';
  }
  return (
    <>
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
          <p className="vacancy__salary-price">€ {postData.salary}</p>
        </div>
      </div>
    </>
  );
};
// Post.propTypes = {
//   getJobList: PropTypes.func.isRequired,
//   jobList: PropTypes.array,
//   formaterDateToShedule: PropTypes.func.isRequired
// };

export default PostDescriptionHeader;
