import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { deleteNewOrderTableData } from '@/redux/actions/newOrderTableActions';
import { NewOrderTableProps } from '@/shared/prop-types/TablesProps';
import { RTLProps } from '@/shared/prop-types/ReducerProps';
import TopSellingCardProducts from './components/TopSellingCardProducts';
import { editTodoElement, fetchTodoListData } from '../../Todo/redux/actions';
import todoCard from '../../Todo/types';
import WeeklyAllTransRange from './components/WeeklyAllTransRange';
import WeeklyTransRange from './components/WeeklyTransRange';
import ShowPromotions from './components/ShowPromotions';

import TotalCards from './components/TotalCards';
import TotalFinancialTrans from './components/TotalFinancialTrans';
import TotalNonFinancialTrans from './components/TotalNonFinancialTrans';
import TotalNetworkTrans from './components/TotalNetworkTrans';
import TotalAtmTrans from './components/TotalAtmTrans';
import TotalPosTrans from './components/TotalPosTrans';
import TotalEcomTrans from './components/TotalEcomTrans';
import TotalMobileAppTrans from './components/TotalMobileAppTrans';

const onDeleteRow = (dispatch, newOrder) => (index) => {
  const arrayCopy = [...newOrder];
  arrayCopy.splice(index, 1);
  dispatch(deleteNewOrderTableData(arrayCopy));
};

const CardAndTransactionsDashboard = ({
  newOrder, todoElements, rtl, editTodoElementAction, fetchTodoListDataAction,
}) => {
  const { t } = useTranslation('common');

  useEffect(() => {
    if (todoElements.length === 0) { // You can delete it if you need
      fetchTodoListDataAction();
    }
  }, [fetchTodoListDataAction, todoElements.length]);

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('dashboard_Card_and_trans.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <TotalCards />
        <TotalFinancialTrans />
        <TotalNonFinancialTrans />
        <TotalNetworkTrans />
        <TotalAtmTrans />
        <TotalPosTrans />
        <TotalEcomTrans />
        <TotalMobileAppTrans />
      </Row>
      <Row>
        <WeeklyAllTransRange rtl={rtl.direction} />
        <WeeklyTransRange rtl={rtl.direction} />
      </Row>
      <Row>
        <ShowPromotions />
      </Row>
      <Row>
        <TopSellingCardProducts dir={rtl.direction} />
      </Row>
    </Container>
  );
};

CardAndTransactionsDashboard.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CardAndTransactionsDashboard);
