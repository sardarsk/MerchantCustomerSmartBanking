import EditableReactTable from './components/InstitutionTypeTableView';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button, Container, Row } from 'reactstrap';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';

const InstitutionTypeEdit = () => {
  useEffect(() => {
    fetchAllData();
  }, [])
  const [data, setData] = useState(null);

  const onOpenDetail = (event) => {
    console.log(event);
  }
  const fetchAllData = async () => {
    const response = await SoftPosBakendApi.TerminalOnboardingAPIs.GetAllTerminalsData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        acquirer: item.merchantGuid.acquirerGuid.acquirerId,
        merchantId: item.merchantGuid.merchantId,
        terminalId: item.terminalId,
        mobileNo: item.mobilePhone,
        emailId: item.emailAddress,
      })),
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
      Header: 'Terminal Id',
      accessor: 'terminalId',
      disableGlobalFilter: true,
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
           <Button className='primary' onClick={() => onOpenDetail(row.row.original)}>View</Button>
        </div>
        ),
    },
  ];
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
//   fetchDataAction: fetchAllTerminalData,
// };

export default connect(mapStateToProps)(InstitutionTypeEdit);
