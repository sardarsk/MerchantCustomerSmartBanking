export const LOAD_SEARCH_TXN_TABLE_DATA = 'LOAD_SEARCH_TXN_TABLE_DATA';
export const CHANGE_SEARCH_TXN_TABLE_DATA = 'CHANGE_SEARCH_TXN_TABLE_DATA';
export const DELETE_SEARCH_TXN_TABLE_DATA = 'DELETE_SEARCH_TXN_TABLE_DATA';

export function loadSearchTransactionTableData(index) {
  return {
    type: LOAD_SEARCH_TXN_TABLE_DATA,
    index,
  };
}

export function changeSearchTransactionTableData(data, index) {
  return {
    type: CHANGE_SEARCH_TXN_TABLE_DATA,
    data,
    index,
  };
}

export function deleteSearchTransactionTableData(items) {
  return {
    type: DELETE_SEARCH_TXN_TABLE_DATA,
    items,
  };
}
