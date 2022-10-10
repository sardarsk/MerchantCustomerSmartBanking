import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

  GetMccData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllMcc', { params });
  },
  AddMccData: (data) => {
    const params = {};
      return post(baseUrl+'AddMcc',data, { params });
  },
}