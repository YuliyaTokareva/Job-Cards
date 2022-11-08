import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Cards from './cards/components/cards/Cards';

import * as jobsActions from './cards/job.actions';

const Home = ({ getJobList }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    getJobList();
  }, [pathname]);

  return (
    <div className="cards-body">
      <Cards />
    </div>
  );
};
Home.propTypes = {
  getJobList: PropTypes.func.isRequired
};
const mapDispatch = (dispatch) => {
  return {
    getJobList: () => dispatch(jobsActions.getJobList())
  };
};

export default connect(null, mapDispatch)(Home);
