import React, { useMemo } from 'react';

const CreateUserAccountData = () => {
  const columns = useMemo(
    () => [  
        {
            Header: '#',
            accessor: 'usrId',
            Footer: 'Middle age:',
            disableGlobalFilter: true,
            width: 65,
          },   
      {
        Header: 'Name',
        accessor: 'usrName',//<--Module Table Foreign Reference 
      },
      {
        Header: 'Description',
        accessor: 'usrDespription',//<--Function Group Table Foreign Reference       
      },     
    ],
    [],
  );
 

  const data = [];
  const rows = () => {
    for (let i = 1; i < 36; i += 1) {
      data.push({
        usrId: i,
        usrName: ['Admin', 'User', 'Switch'][Math.floor((Math.random() * 3))],
        usrDespription: ['Admin', 'User', 'Switch&Fraud'][Math.floor((Math.random() * 3))],           
      });
    }
  };

  rows();
  const reactTableData = { tableHeaderData: columns, tableRowsData: data };
  return reactTableData;
};

export default CreateUserAccountData;

