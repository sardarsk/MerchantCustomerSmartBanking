import React, { useMemo } from 'react';

import { useState } from 'react';

const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        Footer: 'Middle age:',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Interface ID',
        accessor: 'intId',
      },
      {
        Header: 'Transaction Code',
        accessor: 'txnCode',
        disableGlobalFilter: true,
      },
      {
        Header: 'Message Type Identifier',
        accessor: 'msgTypwIdentifier',
        disableGlobalFilter: true,
      },
      {
        Header: 'External Response Code',
        accessor: 'ers',
        disableGlobalFilter: true,
      },
      {
        Header: 'Internal Response Code',
        accessor: 'irs',
        disableGlobalFilter: true,
      },
      {
        Header: 'Response Details',
        accessor: 'resdetails',
        disableGlobalFilter: true,
      },
      {
        Header: 'Work',
        accessor: 'work',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
