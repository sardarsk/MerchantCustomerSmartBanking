import { createAction } from 'redux-actions';
import { showNotification } from '../../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest_REG_MERONBOARD = createAction('FETCH_DATA_REQUEST_REG_MERONBOARD');
export const fetchDataSuccess_REG_MERONBOARD = createAction('FETCH_DATA_SUCCESS_REG_MERONBOARD');
export const fetchDataFailure_REG_MERONBOARD = createAction('FETCH_DATA_FAILURE_REG_MERONBOARD');

export const fetchDataRequest_REG_MERONBOARD_1 = createAction('FETCH_DATA_REQUEST_REG_MERONBOARD_1');
export const fetchDataSuccess_REG_MERONBOARD_1 = createAction('FETCH_DATA_SUCCESS_REG_MERONBOARD_1');
export const fetchDataFailure_REG_MERONBOARD_1 = createAction('FETCH_DATA_FAILURE_REG_MERONBOARD_1');

export const fetchMerchantOnBoardingDefaultData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest_REG_MERONBOARD());
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetMerchantOnBoardingDefaultData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        tmsMasterMccTypes: item.tmsMasterMccTypes,
        acquirerAcquirerDefinition: item.acquirerAcquirerDefinition,
        tmsMasterCities:item.tmsMasterCities
      })),
    };

    dispatch(fetchDataSuccess_REG_MERONBOARD(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure_REG_MERONBOARD({ error }));
    throw error;
  }
};


export const fetchMerchantReceiptDefaultData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest_REG_MERONBOARD_1());
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetMerchantReceiptDefaultData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        tmsMasterMccTypes: item.tmsMasterMccTypes,
        acquirerAcquirerDefinition: item.acquirerAcquirerDefinition,
        tmsMasterCities:item.tmsMasterCities
      })),
    };

    dispatch(fetchDataSuccess_REG_MERONBOARD_1(tableData));
  } catch (error) {
    // Your error notification
    showNotification(
      getState().theme,
      getState().rtl,
      `Error Code: ${error}`,
      `Message: ${error}`,
    );
    dispatch(fetchDataFailure_REG_MERONBOARD_1({ error }));
    throw error;
  }
};