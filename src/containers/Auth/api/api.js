import { request } from '../../../utils';
import { API, METHODS } from 'constants';

export default {
  getUserInfo: () => request(METHODS.GET, API.USER_INFO)(),
  login: payload => request(METHODS.POST, API.LOGIN)(payload),
  registration: payload => request(METHODS.POST, API.REGISTRATION)(payload),
};
