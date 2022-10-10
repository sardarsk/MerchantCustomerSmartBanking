import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import FunctionGroupTableView from '../View/components/FunctionGroupListView';
import CreateTableData from '../View/components/CreateDataForFunctionGroup';

const FunctionGroupView = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">List All FunctionGroups</h3>
          
        </Col>
      </Row>
      <Row>
        <FunctionGroupTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default FunctionGroupView;
