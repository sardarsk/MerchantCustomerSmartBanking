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
        Header: 'Security Key Name',
        accessor: 'name',
      },
      {
        Header: 'Security Key Description',
        accessor: 'description',
      },
      {
        Header: 'Private Key Under LMK',
        accessor: 'privateKeyUnderLmk',
      },
      {
        Header: 'LMK KCV',
        accessor: 'lmkKcv',
      },
      {
        Header: 'Key Exponent',
        accessor: 'keyExponent',
      },
      {
        Header: 'Key Length',
        accessor: 'keyLength',
        disableGlobalFilter: true,
      },
      {
        Header: 'Key Expire Date',
        accessor: 'keyExpireDate',
      },
      {
        Header: 'Key Key Version',
        accessor: 'keyVersion',
      },
      {
        Header: 'LMK Slot Id',
        accessor: 'lmkSlotId',
      },
      {
        Header: 'Public Key',
        accessor: 'publicKey',
      },
      
    ],
    [],
  );

  const data = [];
  return { tableHeaderData: columns, tableRowsData: data };
};

export default CreateTableData;
