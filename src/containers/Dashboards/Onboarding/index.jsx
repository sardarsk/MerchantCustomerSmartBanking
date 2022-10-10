import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { NewOrderTableProps } from '@/shared/prop-types/TablesProps';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import { editTodoElement, fetchTodoListData } from '../../Todo/redux/actions';
import Slider from 'react-slick';
import HeaderLessPanel from '@/shared/components/HeaderLessPanel';
import todoCard from '../../Todo/types';
import MonthlyMerchants from './components/MonthlyMerchants';
import MonthlyTerminals from './components/MonthlyTerminals';
import MonthlyMobileAppUsers from './components/MonthlyMobileAppUsers';
import MonthlyCards from './components/MonthlyCards';
import YearlyMerchants from './components/YearlyMerchants';
import YearlyTerminals from './components/YearlyTerminals';
import YearlyMobileAppUsers from './components/YearlyMobileAppUsers';
import YearlyCards from './components/YearlyCards';
import WeeklyOnboardingRange from './components/WeeklyOnboardingRange';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  swipeToSlide: true,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 1 } },
    { breakpoint: 1200, settings: { slidesToShow: 2 } },
    { breakpoint: 1536, settings: { slidesToShow: 1 } },
    { breakpoint: 100000, settings: { slidesToShow: 2 } },
  ],
};

const OnboardingDashboard = ({
  todoElements, rtl, fetchTodoListDataAction,
}) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    if (todoElements.length === 0) { // You can delete it if you need
      fetchTodoListDataAction();
    }
  }, [fetchTodoListDataAction, todoElements.length]);

  return (
    <Container className="dashboard">
      {/*<Row>
        <Col md={12}>
          <h3 className="page-title">{t('dashboard_Card_and_trans.page_title')}</h3>
        </Col>
      </Row>
      */}
      <Row>
        <HeaderLessPanel md={12} sm={12} xl={12} lg={12} xs={12} >
          <Slider {...settings} className="dashboard__carousel">
            <MonthlyMerchants />
            <MonthlyTerminals />
            <MonthlyMobileAppUsers />
            <MonthlyCards />
          </Slider>
        </HeaderLessPanel>

        <HeaderLessPanel md={12} sm={12} xl={12} lg={12} xs={12} >
          <Slider {...settings} className="dashboard__carousel">
            <YearlyMerchants />
            <YearlyTerminals />
            <YearlyMobileAppUsers />
            <YearlyCards />
          </Slider>
        </HeaderLessPanel>
        <WeeklyOnboardingRange rtl={rtl.direction} />
      </Row>
    </Container>
  );
};

OnboardingDashboard.propTypes = {
  newOrder: NewOrderTableProps.isRequired,
  todoElements: PropTypes.arrayOf(todoCard).isRequired,
  fetchTodoListDataAction: PropTypes.func.isRequired,
  editTodoElementAction: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,

};

const mapStateToProps = (state) => {
  const todoElements = state.todo && state.todo.data && state.todo.data.elements
  && state.todo.data.elements.length > 0 ? [...state.todo.data.elements] : [];
  return ({
    newOrder: state.newOrder.items,
    todoElements,
    rtl: state.rtl,
  });
};

const mapDispatchToProps = {
  fetchTodoListDataAction: fetchTodoListData,
  editTodoElementAction: editTodoElement,
};

export default connect(mapStateToProps, mapDispatchToProps)(OnboardingDashboard);
