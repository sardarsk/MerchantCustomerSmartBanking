import { get } from '../base/index';

export default {
  get: (data) => {
    const params = { ...data };
    return get('http://localhost:8185/NanoPay/OmaPay/GetResConversion', { params });
  },
};
