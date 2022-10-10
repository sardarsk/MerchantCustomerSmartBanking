import AcqurerOnBoardTable from './components/AcqurerOnBoardTableView';
//import CreateTableData from '../CreateData';
import { fetchTableData } from './actions';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row,} from 'reactstrap';
import { useTranslation } from 'react-i18next';

const AcquirerOnBoardEdit = ({ fetchDataAction, tableData }) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  debugger;
  let reactTableData2 = {};
  if(null != tableData && null != tableData.mapData){
    reactTableData2 = {  tableRowsData: tableData.mapData };
  }
  
   return (
    <Container>
      {
       (tableData && tableData != null && reactTableData2.tableRowsData != null) &&
      <Row>
        <AcqurerOnBoardTable reactTableData={reactTableData2} />
      </Row>
      }
    </Container>
  );
};

AcquirerOnBoardEdit.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

AcquirerOnBoardEdit.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchTableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(AcquirerOnBoardEdit);
