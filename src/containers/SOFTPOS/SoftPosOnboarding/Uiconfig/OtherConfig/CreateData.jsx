import React, { useMemo } from 'react';


const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'id',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Acquirer Id',
        accessor: 'merchantGuid.acquirerGuid.acquirerName',
      },
      {
        Header: 'Merchant ',
        accessor: 'merchantGuid.merchantName',
      },
      {
        Header: 'Terminal',
        accessor: 'terminalId',
        disableGlobalFilter: true,
      },
      {
        Header: 'Show Detail',
        accessor: 'showDetail',
        disableGlobalFilter: true,
      },
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
