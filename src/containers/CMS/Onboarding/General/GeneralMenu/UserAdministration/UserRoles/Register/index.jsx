import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import AddNewUserRole from '../Register/components/AddNewUserRole';
import { Redirect } from 'react-router-dom';

const UserRoleForm = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("UserRole added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/userRoles/register" />;}

 return (
    <Container>
      <Row>
        <Col>
          <h3 className="page-title">User Roles</h3>
          <h3 className="page-subhead subhead">Please fill all the UserRole Details</h3>
        </Col>
      </Row>
      <Row>
        <AddNewUserRole onSubmit={handleSubmit} />
      </Row>
    </Container>
  );
};

export default UserRoleForm;
