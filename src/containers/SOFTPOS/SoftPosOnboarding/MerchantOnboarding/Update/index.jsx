import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/MerchantEditableReactTable';
import CreateTableData from './components/CreateData';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTableData } from '../actions';

const MerchantEditableTable = ({ fetchDataAction, tableData })=> {
  const { t } = useTranslation('common');

  console.log("tableData")
  console.log(tableData);
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let reactTableData2 = {};
  if(null != tableData && null != tableData.mapData){
    reactTableData2 = { tableHeaderData: CreateTableData().tableHeaderData, tableRowsData: tableData.mapData };
  }else {
    reactTableData2 = { tableHeaderData: CreateTableData().tableHeaderData, tableRowsData: []};

  }
  

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('tables.editable_table.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <EditableReactTable reactTableData={reactTableData2} />
      </Row>
    </Container>
  );
};


MerchantEditableTable.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

MerchantEditableTable.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchTableData,
};


export default connect(mapStateToProps, mapDispatchToProps)(MerchantEditableTable);
