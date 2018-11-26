export default {
  /**
   * returns token if it exists
   *
   * @return {string | boolean} returns token or false if the token doesn't exist
   */
  get: () => {
    try {
      return localStorage.getItem('token');
    } catch (err) {
      /* tslint:disable */
      console.log('Error ', err);
     /* tslint:enable */
      return false;
    }
  },
  /**
   * removes token
   *
   */
  remove: () => {
    localStorage.removeItem('token');
  },
  /**
   * clear entire lovalStorage
   *
   */
  removeAll: () => {
    localStorage.clear();
  },
  /**
   * sets token if it exists
   *
   */
  set: token => {
    if (token) {
      localStorage.setItem('token', token);
    }
  },
};
