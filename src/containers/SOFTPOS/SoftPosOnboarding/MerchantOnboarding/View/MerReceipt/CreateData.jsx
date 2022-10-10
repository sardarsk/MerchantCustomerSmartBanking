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
        Header: 'Slogan 1',
        accessor: 'slogan1',
        disableGlobalFilter: true,
      },
      {
        Header: 'Slogan 2',
        accessor: 'slogan2',
        disableGlobalFilter: true
      },
      {
        Header: 'Visa PreAuth Dcc Message',
        accessor: 'visaPreAuthdccMessage',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Master Card PreAuth Dcc Message',
        accessor: 'masterCardPreAuthdccMessage',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Epp Message',
        accessor: 'eppMessage',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Card Holder Name',
        accessor: 'cardHolderName',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Full Card Number',
        accessor: 'fullCardNumber',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
      {
        Header: 'Expiry Date',
        accessor: 'expiryDate',
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
