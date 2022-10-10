import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/InstitutionTypeTable';
import CreateTableData from '../CreateData';

const InstitutionTypeEdit = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('instution_type.modify.name')}</h3>
          <h3 className="page-subhead subhead">{t('instution_type.modify.desc')}</h3>
        </Col>
      </Row>
      <Row>
        <EditableReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default InstitutionTypeEdit;
