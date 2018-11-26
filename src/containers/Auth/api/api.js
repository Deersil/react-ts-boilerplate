import { request } from '@utils';
import { API, METHODS } from '@constants';

export default {
  login: payload => request(METHODS.POST, API.LOGIN)(payload),
  registration: payload => request(METHODS.POST, API.REGISTRATION)(payload),
  // getUserData: () => request(METHODS.GET, API.USER_INFO)(),
  getUserData: () => request(METHODS.GET, `${API.USER_INFO}/1`)(), // only for mock
  pickRole: role => request(METHODS.POST, API.PICK_ROLE)(role),
};
