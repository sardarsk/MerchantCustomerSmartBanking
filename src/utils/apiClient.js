import appConfigApi from './api/appConfigApi';
import covidApi from './api/covidApi';
import todoApi from './api/todoApi';

const api = {
  appConfig: appConfigApi,
  transaction: covidApi,
  todo: todoApi,
};

export default api;
