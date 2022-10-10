import { createAction } from 'redux-actions';
import { showNotification } from '../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');


export const fetchData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetMerchantOnBoardingDefaultData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        tmsMasterMccTypes: item.tmsMasterMccTypes,
        acquirerAcquirerDefinition: item.acquirerAcquirerDefinition,
        tmsMasterCities:item.tmsMasterCities,
        tmsMasterCurrency:item.tmsMasterCurrencies,
        tmsMasterCountries:item.tmsMasterCountries,
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

export const fetchAllTerminalData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.TerminalOnboardingAPIs.GetAllTerminalsData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.merchantGuid.acquirerGuid.acquirerId,
        merchantId:item.merchantGuid.merchantId,
        terminalId:item.terminalId,
        mobileNo:item.mobilePhone,
        emailId:item.emailAddress,
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
