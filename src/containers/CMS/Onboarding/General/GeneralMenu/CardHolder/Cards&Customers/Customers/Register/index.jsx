import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AddNewCustomer from '../Register/components/AddNewCustomer';
import { Redirect } from 'react-router-dom';

const CustomerForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Customer added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/customer/register" />;}

 return (
    <Container>
      <Row>
      <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
          <h3 className="page-title">Activate Card</h3>
          <h3 className="page-subhead subhead">Please fill  details to activate the card</h3>
        </Col>
      </Row>
      <Row>
        <AddNewCustomer onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default CustomerForm;
