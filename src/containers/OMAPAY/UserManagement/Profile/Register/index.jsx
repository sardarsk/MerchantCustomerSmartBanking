import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import showResults from './Show';
import AddProfileForm from './components/AddProfile';
import CustomIconsExamples from './components/CustomIconsExamples';

const AddProfile = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <AddProfileForm onSubmit={showResults} />
      <CustomIconsExamples />
    </Container>
  );
};

export default AddProfile;
