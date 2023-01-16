import React from 'react';
import ShareIcon from '../../svg/ShareIcon';
import StarIcon from '../../../img/star-icon.png';
import './shareButtons.scss';
const ShareButtons = () => {
  return (
    <>
      <button className="vacancy__button vacancy__selected">
        <img src={`${StarIcon}`} alt="star-icon" className="vacancy__button-icon-star" />
        <span>Save to my list</span>
      </button>
      <button className="vacancy__button vacancy__share">
        <ShareIcon />
        Share
      </button>
    </>
  );
};
export default ShareButtons;
