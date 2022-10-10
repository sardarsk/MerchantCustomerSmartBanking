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
        Header: 'aid',
        accessor: 'aid',
      },
      {
        Header: 'kernel_id',
        accessor: 'kernel_id',
        disableGlobalFilter: true,
      },
      {
        Header: 'transaction_type',
        accessor: 'transaction_type',
        disableGlobalFilter: true,
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
