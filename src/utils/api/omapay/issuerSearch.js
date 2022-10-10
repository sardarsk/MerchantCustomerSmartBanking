import { get2 } from '../base/index';

export default {
  
  get2: (data) => {
    const params = { };
    return get2('http://localhost:8080/omapay/transaction/search?page=0&size=50', data, { params });
  },
};
