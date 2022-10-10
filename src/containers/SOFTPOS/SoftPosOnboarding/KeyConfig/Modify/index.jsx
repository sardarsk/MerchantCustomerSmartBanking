import EditableReactTable from './components/InstitutionTypeTable';
import CreateTableData from './components/CreateData';
import { fetchTableData } from '../actions';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row} from 'reactstrap';

const InstitutionTypeEdit = ({ fetchDataAction, tableData }) => {

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let reactTableData2 = {};
  if(null != tableData && null != tableData.mapData){
    reactTableData2 = { tableHeaderData: CreateTableData().tableHeaderData, tableRowsData: tableData.mapData };
  }
  
   return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Key Configuration</h3>
         
        </Col>
      </Row>
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

const mapDispatchToProps = {
  fetchDataAction: fetchTableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionTypeEdit);
