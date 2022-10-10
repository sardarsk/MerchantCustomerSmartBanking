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
        accessor: 'acquirerId',
      },
      {
        Header: 'Acquirer Code',
        accessor: 'acquirerCode',
      },
      {
        Header: 'Acquirer Name',
        accessor: 'acquirerName',
        disableGlobalFilter: true,
      },
      {
        Header: 'Acquirer Description',
        accessor: 'description',
      },
     
      {
        Header: 'Address',
        accessor: 'address',
        disableGlobalFilter: true,
      },
      {
        Header: 'Contact Number',
        accessor: 'contactNo',
        disableGlobalFilter: true,
      },
      {
        Header: 'Email Id',
        accessor: 'emailId',
        disableGlobalFilter: true,
      },
      {
        Header: 'Country',
        accessor: 'country',
        //disableGlobalFilter: true,
      },
      {
        Header: 'Currency',
        accessor: 'currency',
      //  disableGlobalFilter: true,
       // disableSortBy: true,
      },

    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
