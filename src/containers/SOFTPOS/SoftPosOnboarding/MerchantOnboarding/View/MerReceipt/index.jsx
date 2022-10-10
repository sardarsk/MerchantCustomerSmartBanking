import EditableReactTable from './components/InstitutionTypeTableView';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

const MerchantReciptViewData = () => {

  useEffect(() => {
    fetchAllData();
  }, [])
  const [data, setData] = useState(null);


  const fetchAllData = async () => {
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetMerchantReceiptData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.acquirer.label,
        merchantId: item.merchant1.label,
        slogan1: item.slogan1,
        slogan2: item.slogan2,
        visaPreAuthdccMessage: item.visaPreAuthdccMessage,
        masterCardPreAuthdccMessage: item.masterCardPreAuthdccMessage,
        eppMessage: item.eppMessage,
        cardHolderName: item.cardHolderName,
        fullCardNumber: item.fullCardNumber,
        expiryDate: item.expiryDate
      })),
    };
    setData(tableData)
  }



  let column = [
    {
      Header: '#',
      accessor: 'id',
      disableGlobalFilter: true,
      width: 65,
    },
    {
      Header: 'Acquirer Id',
      accessor: 'acquirer',
    },
    {
      Header: 'Merchant Id',
      accessor: 'merchantId',
      disableGlobalFilter: true,
    },

    {
      Header: 'Slogan 1',
      accessor: 'slogan1',
      disableGlobalFilter: true,
    },
    {
      Header: 'Slogan 2',
      accessor: 'slogan2',
      disableGlobalFilter: true
    },
    {
      Header: 'Visa PreAuth Dcc Message',
      accessor: 'visaPreAuthdccMessage',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Master Card PreAuth Dcc Message',
      accessor: 'masterCardPreAuthdccMessage',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Epp Message',
      accessor: 'eppMessage',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Card Holder Name',
      accessor: 'cardHolderName',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Full Card Number',
      accessor: 'fullCardNumber',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Expiry Date',
      accessor: 'expiryDate',
      disableGlobalFilter: true,
      disableSortBy: true,
    },

  ]
  let reactTableData2 = {};
  if (null != data && null != data.mapData) {
    reactTableData2 = { tableHeaderData: column, tableRowsData: data.mapData };
  }

  return (
    <Container>

      {
        (reactTableData2.tableRowsData != null) &&
        <Row>
          <EditableReactTable reactTableData={reactTableData2} />
        </Row>
      }
    </Container>
  );

};

MerchantReciptViewData.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

MerchantReciptViewData.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

// const mapDispatchToProps = {
//   fetchDataAction: fetchMerchantReceiptData,
// };

export default connect(mapStateToProps)(MerchantReciptViewData);
