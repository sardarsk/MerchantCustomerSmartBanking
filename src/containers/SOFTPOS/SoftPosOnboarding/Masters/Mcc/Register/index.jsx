import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import RegistrationForm from './components/HorizontalFormTwo';
const Scheme = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const handleSubmit = async (formValues) => {
    const response = await SoftPosBakendApi.MccData.AddMccData(formValues);
    if (response.status === 200 && response.data.statusCode === 200) {
      window.alert("Registration done Successfuly ");
      setIsRedirect(true);
    }
    else
      window.alert("Registration Failed ");
  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/master/mcc/register" />;
  }

  return (
    <Container>
      <RegistrationForm onSubmit={handleSubmit} />
    </Container>
  );
};


export default Scheme;