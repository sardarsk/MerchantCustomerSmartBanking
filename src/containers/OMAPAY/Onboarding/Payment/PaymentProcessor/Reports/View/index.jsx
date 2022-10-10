import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import InstitutionTypeTableView from './components/AcquirerRules';
import CreateTableData from '../../../CreateData';

const InstitutionTypeView = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Reports</h3>
          
        </Col>
      </Row>
      <Row>
        <InstitutionTypeTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default InstitutionTypeView;