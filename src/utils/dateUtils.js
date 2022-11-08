import moment from 'moment';
// eslint-disable-next-line
export const formaterDateToShedule = (date) => moment(date).startOf('day').fromNow();
