import { createAction } from 'redux-actions';
import { showNotification } from '../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST_1');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS_1');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE_1');

export const fetchDataRequest2 = createAction('FETCH_DATA_REQUEST_2');
export const fetchDataSuccess2 = createAction('FETCH_DATA_SUCCESS_2');
export const fetchDataFailure2 = createAction('FETCH_DATA_FAILURE_2');

export const fetchDataRequest3 = createAction('FETCH_DATA_REQUEST_3');
export const fetchDataSuccess3 = createAction('FETCH_DATA_SUCCESS_3');
export const fetchDataFailure3 = createAction('FETCH_DATA_FAILURE_3');

export const fetchDataRequest4 = createAction('FETCH_DATA_REQUEST_4');
export const fetchDataSuccess4 = createAction('FETCH_DATA_SUCCESS_4');
export const fetchDataFailure4 = createAction('FETCH_DATA_FAILURE_4');

export const fetchKeyConfigurationData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.keyConfigurationApi.GetKeyConfiguration();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        aquirerId: item.acquirerId
        // acquirerDefinitions: item.AcquirerDefinitions,
        //  acquirerKeyTypeDefinitions: item.AcquirerKeyTypeDefinitions,
        //securityKeyTypeDefinitions:item.SecurityKeyTypeDefinitions
      })),
    };
    window.alert(tableData);
    console.log("api call");
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

export const fetchTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest2());
    const response = await SoftPosBakendApi.keyConfigurationApi.GetAcquirerKeyConfiguration();
    const tableData = {
      mapData: response && response.data.data
    };

    dispatch(fetchDataSuccess2(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure2({ error }));
    throw error;
  }
};

export const fetchGetAllAcquirerKeyTypeDefinitionTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest3());
    const response = await SoftPosBakendApi.keyConfigurationApi.GetAllAcquirerKeyTypeDefinition();
    debugger;
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirerDefinitions: item.acquirerAcquirerDefinitions,
        acquirerKeyTypeDefinitions: item.acquirerAcquirerKeyTypeDefinitions,
       
      })),
    };

    dispatch(fetchDataSuccess3(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure3({ error }));
    throw error;
  }
};


export const fetchSecurityKeyConfigurationTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest4());
    const response = await SoftPosBakendApi.keyConfigurationApi.GetSecurityKeyConfiguration();
    const tableData = {
      mapData: response && response.data.data
    };

    dispatch(fetchDataSuccess4(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure4({ error }));
    throw error;
  }
};