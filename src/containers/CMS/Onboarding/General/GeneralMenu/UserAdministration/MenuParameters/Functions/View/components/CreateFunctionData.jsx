import React, { useMemo } from 'react';

const CreateFunctionData = () => {
  const columns = useMemo(
    () => [  
        {
            Header: '#',
            accessor: 'apfId',
            Footer: 'Middle age:',
            disableGlobalFilter: true,
            width: 65,
          },   
      {
        Header: 'Module',
        accessor: 'apfApmId',//<--Module Table Foreign Reference 
      },
      {
        Header: 'Group',
        accessor: 'apfAfgId',//<--Function Group Table Foreign Reference 
        disableGlobalFilter: true,
      },
      {
        Header: 'Code',
        accessor: 'apfCode',
        disableGlobalFilter: true,
      },
      {
        Header: 'Name',
        accessor: 'apfName', 
        disableGlobalFilter: true,      
      }, 
      {
        Header: 'PCI',
        accessor: 'apfPci',       
      },
      {
        Header: 'Menu Id',
        accessor: 'apfMenuId',       
      },    
    ],
    [],
  );
 

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        apfId: i,
        apfApmId: ['ADM:User Administration', 'PAR:Parameters', 'CPT:Global Account Configuiration'][Math.floor((Math.random() * 3))],
        apfAfgId: ['ADMMENGRP:Menu parameters', 'PARCURGRP:Currencies', 'CPTENTGRP:Entities accounts'][Math.floor((Math.random() * 3))],
        apfCode: ['ADMMENGRP', 'PARCOUGRP', 'lOCPTACCGRPG'][Math.floor((Math.random() * 3))],
        apfName: ['Menu parameters', 'Countries', 'Account configuration'][Math.floor((Math.random() * 3))],
        apfPci: ['yes', 'no', 'yes'][Math.floor((Math.random() * 3))],
        apfMenuId: ['101', '207', '309'][Math.floor((Math.random() * 3))],        
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateFunctionData;

