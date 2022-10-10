import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import CustomerAccountGeneration from './components/CustomerAccountGeneration'

const AccountGenerationForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Account Generated successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/customer/CustomerAccountGeneration" />;}

 return (
    <Container>
      <Row>
      <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
          <h3 className="page-title">Generate AccountNumber</h3>
          <h3 className="page-subhead subhead">Please fill  details to generate the Account number</h3>
        </Col>
      </Row>
      <Row>
        <CustomerAccountGeneration onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default AccountGenerationForm;
