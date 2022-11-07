import { JOB_LIST_RECIEVED } from './job.actions';

const initialState = {
  jobsList: []
};

const jobsReduser = (state = initialState, action) => {
  switch (action.type) {
    case JOB_LIST_RECIEVED:
      return {
        ...state,
        jobsList: action.payload.jobList
      };

    default:
      return state;
  }
};
export default jobsReduser;
