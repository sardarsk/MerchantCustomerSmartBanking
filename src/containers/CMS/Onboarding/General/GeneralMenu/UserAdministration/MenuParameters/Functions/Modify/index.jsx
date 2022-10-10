import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/EditFunctionData';
import CreateTableData from '../View/components/CreateFunctionData';

const FunctionEdit = () => {

  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">Edit Function Data</h3>
          <h3 className="page-subhead subhead">Please edit values accordingly</h3>
        </Col>
      </Row>
      <Row>
        <EditableReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default FunctionEdit;
