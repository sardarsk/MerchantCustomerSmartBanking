import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import CustomerCardGeneration from './components/CustomerCardGeneration';

const CardGenerationForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Card Generated successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/customer/CustomerCardGeneration" />;}

 return (
    <Container>
      <Row>
      <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
          <h3 className="page-title">Generate Card</h3>
          <h3 className="page-subhead subhead">Please fill  details to generate the card</h3>
        </Col>
      </Row>
      <Row>
        <CustomerCardGeneration onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default CardGenerationForm;
