import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import ModulesTableView from '../View/components/ModuleListView';
import CreateTableData from '../View/components/CreateDataForModule';

const ModulesView = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">List All Modules</h3>
          
        </Col>
      </Row>
      <Row>
        <ModulesTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default ModulesView;
