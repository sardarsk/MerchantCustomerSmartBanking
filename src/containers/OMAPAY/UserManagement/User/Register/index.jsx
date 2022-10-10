import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from './Show';
import Wizard from './components/WizardForm';

const WizardForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Wizard onSubmit={showResults} />
    </Container>
  );
};

export default WizardForm;
