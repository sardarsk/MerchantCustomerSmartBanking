import EditableReactTable from './components/InstitutionTypeTableView';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Container, Row } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import { Redirect } from 'react-router';

const InstitutionTypeEdit = () => {
  useEffect(() => {
    fetchAllData();
  }, [])
  const [data, setData] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");
  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);
  }
  if (isRedirect) {
    console.log("acquirerId is " + temp)
    return <Redirect to={`/softpos/merchant/uiconfigurationtheme/update/${temp.acquirerId}`} />;
  }

  const fetchAllData = async () => {
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.GetAllMerchantDetails();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.acquirerGuid.acquirerId,
        mcc: item.mccTypeId.mccTypeDesc,
        merchantName: item.merchantName,
        merchantId: item.merchantId,
        country: item.countryIsoNumId.countryAlpha3Code,
        currency: item.tmsMasterCurrency.currencyCodeAlpha3,
        mobileNo: item.mobileNo,
        emailId: item.emailId
      }))
    };
    setData(tableData)

  }


  let reactTableData2 = {};
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
      Header: 'Merchant Name',
      accessor: 'merchantName',
      disableGlobalFilter: true,
    },
    {
      Header: 'MCC Type',
      accessor: 'mcc',
      disableGlobalFilter: true,
    },
    {
      Header: 'Country',
      accessor: 'country',
      disableGlobalFilter: true
    },
    {
      Header: 'Currency',
      accessor: 'currency',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Mobile No.',
      accessor: 'mobileNo',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'EmailId',
      accessor: 'emailId',
      disableGlobalFilter: true,
      disableSortBy: true,
    },
    {
      Header: 'Show Detail',
      accessor: 'showDetail',
      Cell: row => (
        <div>
       <Button className='primary' onClick={() => edit(row.row.original)}>Edit</Button>
        </div>
      ),
    },
  ]
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

InstitutionTypeEdit.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

InstitutionTypeEdit.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

// const mapDispatchToProps = {
//   fetchDataAction: fetchTableData,
// };

export default connect(mapStateToProps)(InstitutionTypeEdit);
