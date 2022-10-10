import React, { useMemo } from 'react';

import { useState } from 'react';

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
        Header: 'Institution Code',
        accessor: 'institutionCode',
      },
      {
        Header: 'Institution Name',
        accessor: 'institutionDesc',
        disableGlobalFilter: true,
      },
      {
        Header: 'Address',
        accessor: 'address',
        disableGlobalFilter: true,
      },
      {
        Header: 'Contact Number',
        accessor: 'contactNo',
        disableGlobalFilter: true,
      },
      {
        Header: 'Email Id',
        accessor: 'emailId',
        disableGlobalFilter: true,
      },
      {
        Header: 'Country',
        accessor: 'resdetails',
        disableGlobalFilter: true,
      },
      {
        Header: 'Currency',
        accessor: 'work',
        disableGlobalFilter: true,
        disableSortBy: true,
      },
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
