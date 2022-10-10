import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalFormTwo from './components/HorizontalFormTwo';
import showResults from '../../../../SOFTPOS/SoftPosOnboarding/TerminalOnboarding/Register/Show';

const InstititionTypeForm = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
          <h3 className="page-title">{t('instution_type.register.name')}</h3>
          <h3 className="page-subhead subhead">{t('instution_type.register.desc')}</h3>
        </Col>
      </Row>
      <Row>
        <HorizontalFormTwo onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default InstititionTypeForm;
