import { handleActions } from 'redux-actions';
import {
  fetchDataRequest,
  fetchDataSuccess,
  fetchDataFailure,
} from './Institution/Modify/redux/actions';

const defaultState = {
  data: null,
  isFetching: false,
  error: null,
};

export default handleActions(
  {
    [fetchDataRequest](state) {
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    },
    [fetchDataSuccess](state, { payload }) {
      return {
        ...state,
        data: payload,
        isFetching: false,
        error: null,
      };
    },
    [fetchDataFailure](state, { payload }) {
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    },
  },
  defaultState,
);
