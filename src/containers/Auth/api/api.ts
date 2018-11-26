import { request } from '../../../utils';
import { API, METHODS } from '../../../constants';

export default {
  getUserInfo: () => request(METHODS.GET, API.USER_INFO)(),
  login: (payload: any) => request(METHODS.POST, API.LOGIN)(payload),
  registration: (payload: any) => request(METHODS.POST, API.REGISTRATION)(payload),
};
