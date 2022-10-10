

import { get } from '../base/index';
import { post } from '../base/index';
const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

  GetMerchantOnBoardingDefaultData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetMerchantDefaultValues', { params });
  },
  GetAllMerchantDetails: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllMerchants', { params });
  },

  addMerchantOnboardingData: (data) => {
    const params = {};
      return post(baseUrl+'AddMerchant',data, { params });
  },

  GetMerchantReceiptDefaultData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetMerchantDefaultValues', { params });
  },

  addMerchantReceiptData: (data) => {
    const params = {};
      return post(baseUrl+'AddMerchantReceipt',data, { params });
  },
  GetMerchantReceiptData: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllMerchantsReceiptData', { params });
  },
  UpdateMerchantData: (data) => {
    const params = {};
      return post(baseUrl+'UpdateMerchant',data, { params });
  },
}

