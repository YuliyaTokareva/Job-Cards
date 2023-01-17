import { JOB_LIST_RECIEVED } from './job.actions';

type jobAction = {
  type: string;
  payload?: any;
};
type jobState = {
  jobsList: any[];
  loading: boolean;
  error: null | boolean;
};
const initialState = {
  jobsList: [],
  loading: false,
  error: null
};

const jobsReduser = (state: jobState = initialState, action: jobAction) => {
  switch (action.type) {
    case JOB_LIST_RECIEVED:
      return {
        ...state,
        jobsList: action.payload.jobList,
        loading: true,
        error: null
      };

    default:
      return state;
  }
};
export default jobsReduser;
