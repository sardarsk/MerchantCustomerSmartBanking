import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AddNewFunctionGroup from '../Register/components/AddNewFunctionGroup';
import { Redirect } from 'react-router-dom';

const FunctionGroupForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("FunctionGroup added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/functions/register" />;}

 return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">FunctionGroup</h3>
          <h3 className="page-subhead subhead">Please fill all the FunctionGroup Details</h3>
        </Col>
      </Row>
      <Row>
        <AddNewFunctionGroup onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default FunctionGroupForm;
