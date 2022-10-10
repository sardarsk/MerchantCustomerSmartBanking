import acquirerSearch from './acquirerSearch';
import issuerSearch from './issuerSearch';
import paymentpProcessorApi from '../omapay/paymentpProcessorApi';


const api = {
  acquirerRulesSearch: acquirerSearch,
  issuerRulesSearch: issuerSearch,
  paymentpProcessorApi:paymentpProcessorApi,
};

export default api;
