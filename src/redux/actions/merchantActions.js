import { createAction } from 'redux-actions';
import api from '../../utils/api/onboarding/apiClient';
import { showNotification } from '../../shared/components/Notification';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const putMerchantData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await api.merchant.put();
    const merchantData = response.data;
    window.alert("Map: "+JSON.stringify(response));
    window.alert("Data: "+JSON.stringify(merchantData));

    dispatch(fetchDataSuccess(response));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error.response.status}`,
      `Message: ${error.response.statusText}`,
    );
    dispatch(fetchDataFailure({ error }));
    throw error;
  }
};
