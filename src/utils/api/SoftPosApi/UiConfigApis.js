import { get } from '../base/index';
import { post } from '../base/index';

const baseUrl = "http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {


  /**************** Ui Config ************/
  GetDefaultValue: (data) => {
    const params = { ...data };
    return get(baseUrl + 'getDefaultLoadingValue', { params });
  },

  GetUiConfigDataById: (data) => {
    const params = { ...data };
    return get(baseUrl + 'GetAllUiConfigById', { params });
  },

  GetAllMerchantData: (data) => {
    const params = { ...data };
    return get(baseUrl + 'GetAllMerchants', { params });
  },

  GetMerchantByAcquirerId: (data) => {
    const params = {};
    return get(baseUrl + 'getMerchantByAcquirerId/' + data, { params });
  },

  GetTerminalByMerchantId: (data) => {
    const params = {};
    return get(baseUrl + 'GetTerminalsByMerchantId/' + data, { params });
  },

  AddUiConfigData: (data) => {
    const params = {};
    return post(baseUrl + 'AddUiConfig', data, { params });
  },

  AddOtherUiConfigData: (data) => {
    const params = {};
    return post(baseUrl + 'AddOtherUiConfig', data, { params });
  },


  GetAllAcquirerDefinition: (data) => {
    const params = { ...data };
    return get(baseUrl + 'GetAllAcquirer', { params });
  },

  GetAllTerminalDefinition: (data) => {
    const params = { ...data };
    return get(baseUrl + 'GetAllTerminals', { params });
  },

  GetOtherUiConfigById: (data) => {
    const params = { ...data };
    return post(baseUrl + 'GetOtherUiConfigById', data, { params });
  },

  GetAllThemeConfigAcquirer: (data) => {
    const params = {};
    return get(baseUrl + 'GetAllThemeConfigAcquirer', { params });
  },

  GetThemeUiConfigById: (data) => {
    const params = { ...data };
    return get(baseUrl + 'GetAllUiConfigById', { params });
  },
  UpdateThemeSliderConfig: (data) => {
    const params = {};
    return post(baseUrl + 'UpdateUiConfig', data, { params });
  },
};
