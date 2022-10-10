import { createAction } from 'redux-actions';

import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const fetchTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.paramConfigApis.GetAllParamConfig();
  
    const tableData = {
      mapData: response && response.data.map && response.data.map.kernels,
    };

    dispatch(fetchDataSuccess(tableData));
  } catch (error) {
      
    dispatch(fetchDataFailure({ error }));
    throw error;
  }
};
/*
export const fetchAcquirerData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await api.institutionApisView.get();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        institutionCode: item.institutionCode,
        institutionDesc: item.institutionDesc,

      })),
    };
    dispatch(fetchDataSuccess(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure({ error }));
    throw error;
  }
};
*/