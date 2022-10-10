import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import PinWithInfoWindow from './components/PinWithInfoWindow';

const GoogleMap = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <PinWithInfoWindow />
      </Row>
    </Container>
  );
};

export default GoogleMap;
