import ViewMCCTableView from './components/InstitutionTypeTableView';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

const MCCView = () => {
  useEffect(() => {
    fetchAllData();
  }, [])
  const [data, setData] = useState(null);
  let reactTableData2 = {};
  const fetchAllData = async () => {
    const response = await SoftPosBakendApi.MccData.GetMccData();
    const tableData = {
      mapData: response && response.data.data
    };

    setData(tableData)
  };

  let column = [
    {
      Header: '#',
      accessor: 'mccTypeCode1',
      disableGlobalFilter: true,
      width: 65,
    },
    {
      Header: 'Mcc Type Code',
      accessor: 'mccTypeCode',
      disableGlobalFilter: true,
    },
    {
      Header: 'Merchant Category Code Description',
      accessor: 'mccTypeDesc',
    },
    {
      Header: 'Edit',
      accessor: 'edit',
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
          <ViewMCCTableView reactTableData={reactTableData2} />
        </Row>
      }
    </Container>
  );

};

MCCView.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

MCCView.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

// const mapDispatchToProps = {
//   fetchDataAction: fetchTableData,
// };

export default connect(mapStateToProps)(MCCView);
