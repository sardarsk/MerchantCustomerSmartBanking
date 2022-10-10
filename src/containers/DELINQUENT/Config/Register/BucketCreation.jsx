import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import HorizontalFormTwo from './components/CollectionAgentComponent';
import showResults from '../../Show';

const InstititionTypeForm = () => {
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Add - Bucket</h3>
        </Col>
      </Row>
      <Row>
        <HorizontalFormTwo onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default InstititionTypeForm;
