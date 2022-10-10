import { createAction } from 'redux-actions';

import SoftPosBakendApi from '../../../../utils/api/SoftPosApi/BackendApiList'
import { showNotification } from '../../../../shared/components/Notification';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const fetchUiConfigData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.uiConfigApis.GetAllAcquirerDefinition();
    const tableData = {
      mapData: response && response.data.data && response.data.data,
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


export const fetchOtherUIConfigDataForView = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    console.log("api call");
    const response = await SoftPosBakendApi.uiConfigApis.GetAllTerminalDefinition();
    const tableData = {
      mapData: response && response.data.data && response.data.data,
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



export const fetchThemeSliderConfigForView = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    console.log("api call");
    const response = await SoftPosBakendApi.uiConfigApis.GetAllThemeConfigAcquirer();
    const tableData = {
      mapData: response && response.data.data && response.data.data,
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




