import React, { useMemo } from 'react';

const GetHeader = () => {
  const columns = useMemo(
    () => [
      {
        Header: '',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Acquirer Id',
        accessor: 'vtr_acqu_ent_id',
      },
      {
        Header: 'Merchant Id',
        accessor: 'vtr_merchant_iden',
      },
      {
        Header: 'Transaction Date',
        accessor: 'vtr_tran_date',
      },
      {
        Header: 'Stan',
        accessor: 'vtr_stan',
      },
      {
        Header: 'RRN',
        accessor: 'vtr_rrn',
      },
      {
        Header: 'Amount',
        accessor: 'vtr_tran_amnt',
      },
      {
        Header: 'Auth',
        accessor: 'vtr_num_auth',
      },
      {
        Header: 'Resp Code',
        accessor: 'vtr_resp_code',
      },
      {
        Header: 'POS EntryMode',
        accessor: 'vtr_pos_entry_mode',
      },
      {
        Header: 'Src Acct',
        accessor: 'vtr_src_aco',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Dest Acct',
        accessor: 'vtr_dest_aco',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Merchant City',
        accessor: 'vtr_merchant_city',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Country',
        accessor: 'vtr_merchant_cou',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  return columns;
};

export default GetHeader;
