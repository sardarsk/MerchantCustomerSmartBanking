import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/UpdateFunctionGroupData';
import CreateTableData from '../View/components/CreateDataForFunctionGroup';

const FunctionGroupEdit = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">Edit Function Group Data</h3>
          <h3 className="page-subhead subhead">Please edit values accordingly</h3>
        </Col>
      </Row>
      <Row>
        <EditableReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default FunctionGroupEdit;
