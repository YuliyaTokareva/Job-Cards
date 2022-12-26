import { token, baseUrl } from '../env';
const fetchJobsList = () =>
  fetch(`${baseUrl}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error('Faild to get events');
    }
    // eslint-disable-next-line
    return res.json();
  });
export default fetchJobsList;
