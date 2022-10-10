import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/";

/*************** Scheme ***************** */
export default {

  GetSchemeAllData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllScheme', { params });
  },
 
};



