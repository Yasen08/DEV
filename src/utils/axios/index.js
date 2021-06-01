import axios from 'axios';
import config from '../../../serverConfig'

const service = axios.create({
  baseURL: config.baseUrl
});


export default service;
