import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { deleteCryptoTableData } from '@/redux/actions/cryptoTableActions';
import { CryptoTableProps } from '@/shared/prop-types/TablesProps';
import { ThemeProps, RTLProps } from '@/shared/prop-types/ReducerProps';
import TopTen from './components/TopTen';

const onDeleteCryptoTableData = (dispatch, cryptoTable) => (index) => {
  const arrayCopy = [...cryptoTable];
  arrayCopy.splice(index, 1);
  dispatch(deleteCryptoTableData(arrayCopy));
};

const FinanceDashboard = ({
  dispatch, cryptoTable, rtl, theme,
}) => {
  const { t } = useTranslation('common');

  return (
    <Container className="dashboard">
      <Row>
        <Col md={12}>
          <h3 className="page-title">{t('finance_dashboard.page_title')}</h3>
        </Col>
      </Row>
      <Row>
        <TopTen cryptoTable={cryptoTable} onDeleteCryptoTableData={onDeleteCryptoTableData(dispatch, cryptoTable)} />
      </Row>
    </Container>
  );
};

FinanceDashboard.propTypes = {
  cryptoTable: CryptoTableProps.isRequired,
  dispatch: PropTypes.func.isRequired,
  rtl: RTLProps.isRequired,
  theme: ThemeProps.isRequired,
};

export default connect(state => ({
  cryptoTable: state.cryptoTable.items,
  rtl: state.rtl,
  theme: state.theme,
}))(FinanceDashboard);
