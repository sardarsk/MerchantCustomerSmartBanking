import { useMemo } from 'react';

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
        Header: 'Acquirer Name',
        accessor: 'acquirer',
      },
      {
        Header: 'MCC Type',
        accessor: 'mcc',
        disableGlobalFilter: true,
      },
      {
        Header: 'Merchant Name',
        accessor: 'merchantName',
        disableGlobalFilter: true,
      },
      {
        Header: 'Country',
        accessor: 'country',
        disableGlobalFilter: true
      },
      {
        Header: 'Date',
        accessor: 'date',
        disableGlobalFilter: true,
      },
      {
        Header: 'Emirates',
        accessor: 'emirates',
        disableGlobalFilter: true,
      },
      {
        Header: 'Currency',
        accessor: 'currency',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );
  console.log("useMemo");
  console.log(columns);
  const data = [];
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;
