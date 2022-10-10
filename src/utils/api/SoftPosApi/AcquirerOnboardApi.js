import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

  GetAllAcquirerData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllAcquirer', { params });
  },

  GetAllAcquirerDefaultData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAcquirerOnboardDefaultValues', { params });
  },
  AddAcquirerData: (data) => {
    const params = {};
      return post(baseUrl+'AddAcquirer',data, { params });
  },
  UpdateAcquirerData: (data) => {
    const params = {};
      return post(baseUrl+'UpdateAcquirer',data, { params });
  },

  
  GetAcquirerById: (data) => {
    const params = {  };
    return get(baseUrl+'getAcquirerById/'+data, { params });
  },
};
