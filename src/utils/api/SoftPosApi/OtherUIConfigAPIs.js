import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

GetOtherConfiDataById: (data) => {
  const params = {};
    return post(baseUrl+'GetOtherUiConfigById',data, { params });
},
UpdateOtherConfiData: (data) => {
  const params = {};
    return post(baseUrl+'UpdateOtherUiConfig',data, { params });
},
}