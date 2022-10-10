import { createAction } from 'redux-actions';

import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';


export const fetchDataRequest5 = createAction('FETCH_DATA_REQUEST_5');
export const fetchDataSuccess5 = createAction('FETCH_DATA_SUCCESS_5');
export const fetchDataFailure5 = createAction('FETCH_DATA_FAILURE_5');

export const fetchDataRequest6 = createAction('FETCH_DATA_REQUEST_6');
export const fetchDataSuccess6 = createAction('FETCH_DATA_SUCCESS_6');
export const fetchDataFailure6 = createAction('FETCH_DATA_FAILURE_6');

export const fetchConfigParamData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest5());
    const response = await SoftPosBakendApi.paramConfigApis.GetDefaultValue();
    const tableData = {
      mapData: response && response.data.map && response.data.map,
    };

    dispatch(fetchDataSuccess5(tableData));
  } catch (error) {
    
    dispatch(fetchDataFailure5({ error }));
    throw error;
  }
};

export const fetchParamConfigDataForView = () => async (dispatch, getState) => {
  try {
    dispatch(fetchDataRequest6());
    console.log("api call");
    const response = await SoftPosBakendApi.uiConfigApis.GetAllTerminalDefinition();
    const tableData = {
      mapData: response && response.data.data && response.data.data,
    };

    dispatch(fetchDataSuccess6(tableData));
  } catch (error) {
      dispatch(fetchDataFailure6({ error }));
    throw error;
  }
};



