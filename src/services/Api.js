import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://meetpets-back.herokuapp.com'
});

export default Api;