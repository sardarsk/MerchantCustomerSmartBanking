import { createAction } from 'redux-actions';
 import { showNotification } from '../../../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');



export const fetchTableData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    console.log("api call");
    const response = await SoftPosBakendApi.TerminalOnboardingAPIs.GetAllTerminalsData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        guid: item.guid,
        acquirerId: item.merchantGuid.acquirerGuid.acquirerId,
        merchantId: item.merchantGuid.merchantId,
        terminalId: item.terminalId,
      })),
    };
    dispatch(fetchDataSuccess(tableData));
  } catch (error) {
    // Your error notification
    console.log("catch error");

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


export const fetchAcquirerOnBoardingDefaultData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.acquirerApisView.GetAllAcquirerDefaultData();
    debugger;
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        tmsMasterCountry: item.tmsMasterCountries,
        tmsMasterCurrency: item.tmsMasterCurrencies,
        tmsAcquirerApplicationIdGenerations:item.tmsAcquirerApplicationIdGenerations
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