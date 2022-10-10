import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import FunctionTableView from '../View/components/FunctionListView';
import CreateTableData from '../View/components/CreateFunctionData';

const FunctionView = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">List All Functions</h3>
          
        </Col>
      </Row>
      <Row>
        <FunctionTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default FunctionView;
