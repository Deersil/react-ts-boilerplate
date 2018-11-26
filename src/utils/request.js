import tokenHandler from './tokenHandler';
import axios from 'axios';
import schemas from '@schemas';
import { SCHEMAS } from '@constants';

axios.defaults.headers.post['Content-Type'] = 'application/json';

const axiosInstance = axios.create();

const makeRequest = instance => (method, url, params) => {
  const token = tokenHandler.get();
  const requestSchema = schemas[`${url}${SCHEMAS.REQUEST}${method}`];
  if (requestSchema) {
    const valid = requestSchema(...params);
    if (!valid)
      return Promise.reject({
        error: "Sended transfer object isn't valid",
      });
  }
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return instance[method](url, ...params);
};
axiosInstance.interceptors.response.use(
  res => {
    let response = res.data || res;
    const { config } = res || {};
    const { url, method } = config || {};
    const responseSchema = schemas[`${url}${SCHEMAS.RESPONSE}${method}`];
    if (res.error) {
      return Promise.reject(res.error);
    }
    if (responseSchema) {
      const valid = responseSchema(response);
      if (!valid)
        return Promise.reject({
          error: "Recevied transfer object isn't valid",
        });
    }
    return response;
  },
  error => {
    const { response } = error || {};
    const { data } = response || {};
    if (data) {
      return Promise.reject(data);
    }
    return Promise.reject(error);
  }
);
/**
 * Axios wrapper
 *
 * @param  {string} method Method of the request
 * @param  {string} url url of the request
 *
 * @return {object} wrapped axios function that receives params
 */
export default (method, url) => (...params) => makeRequest(axiosInstance)(method, url, params);
