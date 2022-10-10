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
        Header: 'mode',
        accessor: 'mode',
        disableGlobalFilter: true,
      },
      {
        Header: 'rdol_data',
        accessor: 'rdol_data',
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
