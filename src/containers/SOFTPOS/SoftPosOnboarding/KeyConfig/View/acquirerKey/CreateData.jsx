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
        accessor: 'acquirerKeyName',
       
      },
      {
        Header: 'Acquirer Key Description',
        accessor: 'acquirerKeyDescription',
      },
     
      {
        Header: 'Acquirer Key Under LMK',
        accessor: 'acquireKeyUnderLmk',
       
      },
      {
        Header: 'Acquirer Key KCV',
        accessor: 'acquirerKeyKcv',
      
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
