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
        accessor: 'acquirerId',
      },
      {
        Header: 'Acquirer Code',
        accessor: 'acquirerCode',
      },
      {
        Header: 'Acquirer Key Name',
        accessor: 'name',
        disableGlobalFilter: true,
      },
      {
        Header: 'Acquirer Key Description',
        accessor: 'description',
      },
     
      {
        Header: 'Acquirer Key Under LMK',
        accessor: 'keyUnderLmk',
        disableGlobalFilter: true,
      },
      {
        Header: 'Acquirer Key KCV',
        accessor: 'keyKcv',
        disableGlobalFilter: true,
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
