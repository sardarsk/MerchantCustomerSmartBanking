import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AddNewModule from '../Register/components/AddNewModule';
import { Redirect } from 'react-router-dom';

const ModuleForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Module added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/modules/register" />;}

 return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">Module</h3>
          <h3 className="page-subhead subhead">Please fill all the Module Details</h3>
        </Col>
      </Row>
      <Row>
        <AddNewModule onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default ModuleForm;
