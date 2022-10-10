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
        Header: 'Acquirer Id',
        accessor: 'acquirer',
      },
      {
      Header: 'Merchant Id',
      accessor: 'merchantId',
      disableGlobalFilter: true,
    },
     
      {
        Header: 'Merchant Name',
        accessor: 'merchantName',
        disableGlobalFilter: true,
      },
      {
        Header: 'MCC Type',
        accessor: 'mcc',
        disableGlobalFilter: true,
      },
      {
        Header: 'Country',
        accessor: 'country',
        disableGlobalFilter: true
      },
      {
        Header: 'Currency',
        accessor: 'currency',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Mobile No.',
        accessor: 'mobileNo',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'EmailId',
        accessor: 'emailId',
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
