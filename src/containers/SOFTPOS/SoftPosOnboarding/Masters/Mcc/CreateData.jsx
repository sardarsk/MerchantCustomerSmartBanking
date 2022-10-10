import React, { useMemo } from 'react';


const CreateTableData = () => {
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: 'mccTypeCode1',
        disableGlobalFilter: true,
        width: 65,
      },
      {
        Header: 'Mcc Type Code',
        accessor: 'mccTypeCode',
        disableGlobalFilter: true,
      },
      {
        Header: 'Merchant Category Code Description',
        accessor: 'mccTypeDesc',
      },
     
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
