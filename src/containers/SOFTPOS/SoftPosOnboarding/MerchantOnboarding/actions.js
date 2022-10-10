import { createAction } from 'redux-actions';
import { showNotification } from '../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../utils/api/SoftPosApi/BackendApiList';

export const fetchDataRequest = createAction('FETCH_DATA_REQUEST');
export const fetchDataSuccess = createAction('FETCH_DATA_SUCCESS');
export const fetchDataFailure = createAction('FETCH_DATA_FAILURE');

export const fetchTableData = () => async (dispatch, getState) => {

  try {
    dispatch(fetchDataRequest());
    console.log("here in action call");
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetAllMerchantDetails();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.acquirerGuid.acquirerId,
        mcc: item.mccTypeId.mccTypeDesc,
        merchantName: item.merchantName,
        merchantId:item.merchantId,
        country: item.countryIsoNumId.countryAlpha3Code,
        currency: item.tmsMasterCurrency.currencyCodeAlpha3,
        mobileNo:item.mobileNo,
        emailId:item.emailId
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

export const fetchMerchantReceiptData = () => async (dispatch, getState) => {

  try {
    dispatch(fetchDataRequest());
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetMerchantReceiptData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.acquirer.label,
        merchantId: item.merchant1.label,
        slogan1: item.slogan1,
        slogan2: item.slogan2,
        visaPreAuthdccMessage:item.visaPreAuthdccMessage,
        masterCardPreAuthdccMessage:item.masterCardPreAuthdccMessage,
        eppMessage:item.eppMessage,
        cardHolderName:item.cardHolderName,
        fullCardNumber:item.fullCardNumber,
        expiryDate:item.expiryDate
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

