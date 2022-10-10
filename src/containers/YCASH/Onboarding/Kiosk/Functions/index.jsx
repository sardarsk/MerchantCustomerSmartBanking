import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/KioskFunctionsList';
import CreateTableData from '../Functions/components/CreateData';

const KioskFunctions = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Kiosk Functions</h3>
          <h3 className="page-subhead subhead">Kiosk Functions</h3>
        </Col>
      </Row>
      <Row>
        <EditableReactTable reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default KioskFunctions;
