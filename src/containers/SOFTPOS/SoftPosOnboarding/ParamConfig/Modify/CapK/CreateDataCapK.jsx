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
        Header: 'index',
        accessor: 'index',
      },
      {
        Header: 'explen',
        accessor: 'explen',
        disableGlobalFilter: true,
      },
      {
        Header: 'exponent',
        accessor: 'exponent',
        disableGlobalFilter: true,
      },
      {
        Header:'keylen',
        accessor: 'keylen',
      },
      {
        Header:'modulus',
        accessor: 'modulus',
      },
      
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
