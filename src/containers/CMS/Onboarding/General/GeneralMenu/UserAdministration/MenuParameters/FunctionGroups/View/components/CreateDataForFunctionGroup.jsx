import React, { useMemo } from 'react';

const CreateFunctionGroupData = () => {
  const columns = useMemo(
    () => [  
        {
            Header: '#',
            accessor: 'afgId',
            Footer: 'Middle age:',
            disableGlobalFilter: true,
            width: 65,
          },   
      {
        Header: 'Module',
        accessor: 'afgApmId',       
      },
      {
        Header: 'Code',
        accessor: 'afgCode',
        disableGlobalFilter: true,
      },
      {
        Header: 'Name',
        accessor: 'afgName', 
        disableGlobalFilter: true,      
      },  
      {
        Header: 'Menu Id',
        accessor: 'afgMenuId',       
      },    
    ],
    [],
  );
 

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        afgId: i,
        afgApmId: ['ADM:User Administration', 'PAR:Parameters', 'CPT:Global Account Configuiration'][Math.floor((Math.random() * 3))],
        afgCode: ['ADMMENGRP', 'PARCOUGRP', 'lOCPTACCGRPG'][Math.floor((Math.random() * 3))],
        afgName: ['Menu parameters', 'Countries', 'Account configuration'][Math.floor((Math.random() * 3))],
        afgMenuId: ['101', '207', '309'][Math.floor((Math.random() * 3))],        
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateFunctionGroupData;

