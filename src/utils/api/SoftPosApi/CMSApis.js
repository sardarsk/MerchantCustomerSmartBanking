import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://localhost:8185/NanoPay/Middleware/UiApi/";

export default {

 
/**************** Ui Config ************/
GetCustomerAccount: (data) => {
  const params = { ...data };
    return get(baseUrl+'getDefaultsValue', { params });
},

};
