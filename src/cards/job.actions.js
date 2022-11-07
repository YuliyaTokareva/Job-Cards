import fetchJobsList from './jobGateway';
export const JOB_LIST_RECIEVED = 'JOB_LIST_RECIEVED';
export const jobListRecieved = (jobList) => {
  const action = {
    type: JOB_LIST_RECIEVED,
    payload: {
      jobList
    }
  };
  return action;
};
export const getJobList = () => {
  // eslint-disable-next-line
  const thunkAction = function (dispatch) {
    fetchJobsList().then((jobList) => dispatch(jobListRecieved(jobList)));
  };
  return thunkAction;
};
