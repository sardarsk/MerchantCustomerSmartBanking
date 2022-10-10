import { get } from '../base/index';
import { post } from '../base/index';
const baseUrl="http://10.0.33.226:8185/NanoPay/Middleware/UiApi/";

export default {

  GetAcquirerKeyConfiguration: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllAcquireKeyConfiguration', { params });
  }, 
  GetSecurityKeyTypeConfiguration: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllSecurityKeyType', { params });
  },
  GetAllAcquirerKeyTypeDefinition: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllAcquirerKeyTypeDefinition', { params });
  },
  GetAllSecurityKeyDataAsymmetric: (data) => {
    const params = { ...data };
      return get(baseUrl+'GetAllSecurityKeyDataAsymmetric', { params });
  },

  submitKeyConfig: (data) => {
    const params = {};
      return post(baseUrl+'addAcquirerKey',data, { params });
  },
  submitSecurityKeyTypeConfig: (data) => {
    const params = {};
      return post(baseUrl+'addSecurityKeyType',data, { params });
  },
  addSecurityKeyConfiguration: (data) => {
    const params = {};
      return post(baseUrl+'addSecurityKey',data, { params });
  },


};