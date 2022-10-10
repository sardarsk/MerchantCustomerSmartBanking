import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AddNewFunction from '../Register/components/AddNewFunction';
import { Redirect } from 'react-router-dom';

const FunctionForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Function added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/function/register" />;}

 return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">Function</h3>
          <h3 className="page-subhead subhead">Please fill all the Function Details</h3>
        </Col>
      </Row>
      <Row>
        <AddNewFunction onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default FunctionForm;
