import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Cards from './cards/components/cards/Cards';
import Post from './cards/components/post/Post';
import Footer from './cards/components/footer/Footer';
import * as jobsActions from './cards/job.actions';
import * as jobSelectors from './cards/job.selectors';
const Home = ({ getJobList }) => {
  useEffect(() => {
    getJobList();
  }, []);

  return (
    <>
      <div className="cards-body">
        <Cards />
      </div>
      {/* <Routes>
        <Route path=":id" element={<Post />} />
      </Routes> */}

      {/* <Post />
      <Footer /> */}
    </>
  );
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
export default connect(mapState, mapDispatch)(Home);
