import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalFormTwo from './components/CollectionAgentComponent';
import showResults from '../../Show';

const InstititionTypeForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Add - Collection Agent</h3>
        </Col>
      </Row>
      <Row>
        <HorizontalFormTwo onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default InstititionTypeForm;
