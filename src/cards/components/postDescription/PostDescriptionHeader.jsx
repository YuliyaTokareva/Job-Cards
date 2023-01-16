import React from 'react';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import './postDescriptionHeader.scss';

const PostDescriptionHeader = ({ postData }) => {
  if (!postData) {
    return '';
  }
  return (
    <>
      <div className="vacancy__description-block">
        <p className="vacancy__description">{postData.title}</p>
        <div className="vacancy__salary ">
          <p className="vacancy__salary-price">€ {postData.salary}</p>
          <p className="vacancy__salary-date">Brutto, per year</p>
        </div>
        <p className="vacancy__time">Posted {formaterDateToShedule(postData.createdAt)}</p>
      </div>
    </>
  );
};

export default PostDescriptionHeader;
