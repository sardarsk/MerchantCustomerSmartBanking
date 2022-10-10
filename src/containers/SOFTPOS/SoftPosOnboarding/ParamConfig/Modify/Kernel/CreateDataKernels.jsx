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
        Header: 'kernel_id',
        accessor: 'kernel_id',
        disableGlobalFilter: true,
      },
      {
        Header: 'aid',
        accessor: 'aid',
      },
      {
        Header: 'transaction_type',
        accessor: 'transaction_type',
      },
      {
        Header: 'tag_data',
        accessor: 'tag_data',
        disableGlobalFilter: true,
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
