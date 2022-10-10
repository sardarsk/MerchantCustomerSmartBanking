import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

 
/**************** Ui Config ************/
GetDefaultValue: (data) => {
  const params = { ...data };
    return get(baseUrl+'getDefaultsValue', { params });
},
AddParamConfig: (data) => {
  const params = {};
    return post(baseUrl+'AddConfigParam',data, { params });
},

GetAllParamConfig: (data) => {
  const params = { ...data };
    return get(baseUrl+'GetAllParamConfig', { params });
},
};
