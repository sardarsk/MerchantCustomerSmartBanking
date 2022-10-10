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
        Header: 'Card number',
        accessor: 'card',
      },
      {
        Header: 'Account',
        accessor: 'accountNumber',
      },
      {
        Header: 'Cust Name',
        accessor: 'name',
      },
      {
        Header: 'Trace No',
        accessor: 'traceNumber',
        disableGlobalFilter: true,
        Footer: (info) => {
          const totalAge = useMemo(
            () => info.rows.reduce((sum, row) => Number(row.values.age) + sum, 0),
            [info.rows],
          );
          const age = Math.round(totalAge / info.flatRows.length);
          return <span>{age}</span>;
        },
      },
      {
        Header: 'Txn Date',
        accessor: 'txnDate',
        disableGlobalFilter: true,
      },
      {
        Header: 'Ref Number',
        accessor: 'refNumber',
      },
      {
        Header: 'Terminal Id',
        accessor: 'terminalId',
        disableSortBy: true,
      },
      {
        Header: 'Terminal Loc',
        accessor: 'terminalLoc',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Status Code',
        accessor: 'status',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  return columns;
};

export default GetHeader;
