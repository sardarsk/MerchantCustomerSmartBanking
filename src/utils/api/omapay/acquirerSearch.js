import { get2 } from '../base/index';

export default {
  
  get: (uri, data, pageQuery) => {
    const params = { };
    return get2(uri+'?'+pageQuery, data, { params });
  },
};
