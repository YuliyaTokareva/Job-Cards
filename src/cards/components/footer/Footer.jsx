import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonArrow from '../../svg/ButtonArrow';
import './footer.scss';
const Footer = () => {
  return (
    <footer className="footer desktop">
      <NavLink to={`/`} className="footer__buttton">
        <ButtonArrow />
        RETURN TO JOB BOARD
      </NavLink>
    </footer>
  );
};

export default Footer;
