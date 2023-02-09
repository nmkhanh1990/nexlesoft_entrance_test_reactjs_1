import axios from 'axios';

export const apiHelper = axios.create({
  baseURL: 'http://streaming.nexlesoft.com:4000/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
