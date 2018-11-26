import { request } from '@utils';
import { API, METHODS } from '@constants';

export default {
  login: payload => request(METHODS.POST, API.LOGIN)(payload),
  registration: payload => request(METHODS.POST, API.REGISTRATION)(payload),
  getUserInfo: () => request(METHODS.GET, API.USER_INFO)(),
};
