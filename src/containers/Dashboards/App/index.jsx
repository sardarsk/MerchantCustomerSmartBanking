import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import CurrentUsers from './components/CurrentUsers';
import SessionShort from './components/SessionShort';
import ActiveUsersShort from './components/ActiveUsersShort';
import NewUsersShort from './components/NewUsersShort';
import PageViewsShort from './components/PageViewsShort';
import WeeklyStatMobile from './components/WeeklyStatMobile';

const AppDashboard = ({ rtl }) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('app_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <SessionShort />
        <ActiveUsersShort />
        <NewUsersShort />
        <PageViewsShort />
      </Row>
      <Row>
        <CurrentUsers />
        <WeeklyStatMobile />
      </Row>
    </Container>
  );
};

AppDashboard.propTypes = {
  rtl: RTLProps.isRequired,
};

export default connect(state => ({
  rtl: state.rtl,
}))(AppDashboard);
