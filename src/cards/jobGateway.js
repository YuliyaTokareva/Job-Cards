// const baseUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
// const fetchJobsList = (data) =>
//   fetch(`${baseUrl}`).then((res) => {
//     if (!res.ok) {
//       throw new Error('Faild to get events');
//     }
//     // eslint-disable-next-line
//     return res.json();
//   });
// export default fetchJobsList;
const token = 'wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu';
const baseUrl = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data';
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
// const baseUrl = 'https://api.iev.aero/api/flights/06-11-2021';
// const fetchJobsList = () =>
//   fetch(`${baseUrl}`).then((res) => {
//     if (!res.ok) {
//       throw new Error('Faild to get events');
//     }
//     // eslint-disable-next-line
//     return res.json();
//   });
// export default fetchJobsList;
