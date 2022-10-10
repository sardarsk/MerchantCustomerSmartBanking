import { createAction } from 'redux-actions';
import api from '../../../../utils/apiClient';
import { showNotification } from '../../../../shared/components/Notification';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const fetchData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await api.transaction.get();
    const covidMapData = {
      mapData: response && response.data && response.data.map(item => ({
        id: item.countryInfo.iso2,
        value: item.cases,
        name: item.country,
        deaths: item.deaths,
        recovered: item.recovered,
      })),
    };
    //window.alert("Map: "+JSON.stringify(covidMapData));
    dispatch(fetchDataSuccess(covidMapData));
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
