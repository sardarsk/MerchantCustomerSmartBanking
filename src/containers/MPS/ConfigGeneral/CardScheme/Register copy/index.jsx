import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import HorizontalForm from './components/HorizontalForm';
import HorizontalFormTwo from './components/HorizontalFormTwo';
import VerticalForm from './components/VerticalForm';
import VerticalFormTwo from './components/VerticalFormTwo';
import showResults from '../../../Show';

const FormValidation = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('forms.from_validation.title')}</h3>
          <h3 className="page-subhead subhead">Use this elements, if you want to show some hints or additional
            information
          </h3>
        </Col>
      </Row>
      <Row>
        <HorizontalFormTwo onSubmit={showResults} />
      </Row>
    </Container>
  );
};

export default FormValidation;
