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
        Header: 'rid',
        accessor: 'rid',
      },
      {
        Header: 'pk_index',
        accessor: 'pk_index',
      },
      {
        Header: 'cert_serial',
        accessor: 'cert_serial',
  
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
