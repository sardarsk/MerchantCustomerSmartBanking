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
        Header: 'Terminal Id',
        accessor: 'terminalId',
        disableGlobalFilter: true,
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
