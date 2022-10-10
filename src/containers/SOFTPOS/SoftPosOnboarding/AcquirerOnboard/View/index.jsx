import EditableReactTableAcquirerView from './components/InstitutionTypeTableView';
// import CreateTableData from '../CreateData';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Container, Row } from 'reactstrap';
import { fetchTableDataForView } from '../actions';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';
import { Redirect } from 'react-router';

const AcquirerView = ()=> {
  useEffect(() => {
    fetchDataById();
  }, [])
  let reactTableData2 = {};
  const [data, setData] = useState(null);
  const [temp, setTempData] = useState("");
  const [isRedirect, setIsRedirect] = useState(false);

  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);
  }

  if (isRedirect) {
    console.log("acquirerId is " + temp)
    return <Redirect to={`/softpos/merchant/institution/update/${temp.guid}`} />;
  }
  const fetchDataById = async () => {
    const response = await SoftPosBakendApi.acquirerApisView.GetAllAcquirerData();
    if (response) {
      const tableData = {
        mapData: response && response.data.data && response.data.data.map(item => ({
          guid: item.guid,
          acquirerId: item.acquirerId,
          acquirerCode: item.acquirerCode,
          acquirerName: item.acquirerName,
          description: item.description,
          address: item.address,
          contactNo: item.contactNo,
          emailId: item.emailId,
          country: item.tmsMasterCountry.countryAlpha3Code,
          currency: item.tmsMasterCurrency.currencyCodeAlpha3,
          institutionLogoImagePath:item.institutionLogoImagePath
        })),
      }
      setData(tableData)
    };
  }
  let colums = [
    {
      Header: '#',
      accessor: 'id',
      disableGlobalFilter: true,
      width: 65,
    },
    {
      Header: 'Acquirer Id',
      accessor: 'acquirerId',
    },
    {
      Header: 'Acquirer Code',
      accessor: 'acquirerCode',
    },
    {
      Header: 'Acquirer Name',
      accessor: 'acquirerName',
      disableGlobalFilter: true,
    },
    {
      Header: 'Acquirer Description',
      accessor: 'description',
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
      accessor: 'country',
      //disableGlobalFilter: true,
    },
    {
      Header: 'Currency',
      accessor: 'currency',
      //  disableGlobalFilter: true,
      // disableSortBy: true,
    },
    {
      Header: 'Image File Path',
      accessor: 'institutionLogoImagePath',
      //  disableGlobalFilter: true,
      // disableSortBy: true,
    },
    {
      Header: 'Show Detail',
      accessor: 'showDetail',
      Cell: row => (
        <div>
          <Button className='primary' onClick={() => edit(row.row.original)}>Edit</Button>
        </div>
      ),
    }

  ]


  if (null != data && null != data) {
    reactTableData2 = { tableHeaderData: colums, tableRowsData: data.mapData };
  }

  return (
    <Container>

      {
        (reactTableData2.tableRowsData != null) &&
        <Row>
          <EditableReactTableAcquirerView reactTableData={reactTableData2} />
        </Row>
      }
    </Container>
  );

};

AcquirerView.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

AcquirerView.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchTableDataForView,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcquirerView);
