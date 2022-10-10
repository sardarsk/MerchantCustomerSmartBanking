import { put, get } from '../base/index';

export default {
  
  put: (data) => {
    const params = { };
    return put('http://localhost:8080/merchant', data, { params } );
  },
};
