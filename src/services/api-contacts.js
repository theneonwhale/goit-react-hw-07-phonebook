import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

const addContact = contact => {
  return axios.post('/contcts', contact).then(({ data }) => data);
};
