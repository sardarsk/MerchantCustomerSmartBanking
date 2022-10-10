import React, { useMemo } from 'react';

const CreateTableData = () => {
  const columns = useMemo(
    () => [  
        {
            Header: '#',
            accessor: 'apmId',
            Footer: 'Middle age:',
            disableGlobalFilter: true,
            width: 65,
          },   
      {
        Header: 'Code',
        accessor: 'apmCode',       
      },
      {
        Header: 'Name',
        accessor: 'apmName',
        disableGlobalFilter: true,
      },
      {
        Header: 'Menu Id',
        accessor: 'apmMenuId',       
      },     
    ],
    [],
  );
 

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        apmId: i,
        apmCode: ['ADM', 'PAR', 'lOG'][Math.floor((Math.random() * 3))],
        apmName: ['User Administartion', 'Parameters', 'Logs'][Math.floor((Math.random() * 3))],
        menuId: ['100', '200', '300'][Math.floor((Math.random() * 3))],        
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateTableData;

