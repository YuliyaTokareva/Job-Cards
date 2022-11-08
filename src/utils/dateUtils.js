import moment from 'moment';

export const formaterDateToShedule = (date) => moment(date).startOf('day').fromNow();
