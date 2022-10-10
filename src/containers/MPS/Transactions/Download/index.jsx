import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import Transactions from './components/Transactions';

const TransactionsFilter = () => {
  const { t } = useTranslation('common');

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('instution_type.view.name')}</h3>
          <h3 className="page-subhead subhead">{t('instution_type.view.desc')}</h3>
        </Col>
      </Row>
      <Row>
        <Transactions />
      </Row>
    </Container>
  );
};

export default TransactionsFilter;
