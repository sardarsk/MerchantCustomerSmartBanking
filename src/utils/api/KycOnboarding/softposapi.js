import { put, get } from '../base/index';

export default {
  
  post: (data) => {
    const params = { };
    return post('http://localhost:8185/NanoPay/Middleware/uiapi/CreateUiConfig', data, { params } );
  },
};
