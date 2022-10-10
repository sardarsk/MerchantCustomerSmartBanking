import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from './Show';
import RegisterATMForm from './components/RegisterATM';

const RegisterATM = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <RegisterATMForm onSubmit={showResults} />
    </Container>
  );
};

export default RegisterATM;
