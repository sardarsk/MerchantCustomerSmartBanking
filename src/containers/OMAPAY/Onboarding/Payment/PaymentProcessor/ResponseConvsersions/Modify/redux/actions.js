import { createAction } from 'redux-actions';
import api from '../../../../../../../../utils/api/omapay/apiClient';
import { showNotification } from '../../../../../../../../shared/components/Notification';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const fetchTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await api.paymentpProcessorApi.get();

      const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        id: item.rcoId,
        intId: item.rcoIntId.intId,

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
