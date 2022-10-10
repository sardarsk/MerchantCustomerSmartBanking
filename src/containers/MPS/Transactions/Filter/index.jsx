import React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardBody, Col, Container, Row, Button, ButtonGroup, ButtonToolbar, } from 'reactstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import renderIntervalDatePickerField from '@/shared/components/form/IntervalDatePicker';
import { useAsyncDebounce } from 'react-table';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderSelectField from '@/shared/components/form/Select';
import validate from './components/validate';
import api from '../../../../utils/api/search/apiClient';
import GetHeader from '../GetHeader';
import GetNewData from '../GetNewData';
//import { Button } from 'semantic-ui-react'
//import { Icon, Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

const renderField = ({
  input, placeholder, type, meta: { touched, error },
}) => (
  <div className="form__form-group-input-wrap form__form-group-input-wrap--error-above">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <span className="form__form-group-error">{error}</span>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderField.defaultProps = {
  placeholder: '',
  meta: null,
  type: 'text',
};

const TransactionSearch = ({
    reset, pristine, submitting,
  }) => {

  const input = {
    merchantId: '003261699',
    cardNumber: '',
    fromAccount: '',
    toAccount: '',
    referenceNumber: '',
    dateRange: {}
  };

  const { t } = useTranslation('common');
  const getHeader = GetHeader();
  const [rows, setData] = useState([]);
  const [filterData, setFilterData] = useState(input);

  const onChange = useAsyncDebounce((item) => {
    //reactTableData = reactTableData;
  }, 200);

  const cardNumber_buffer = (event) => {
    input.cardNumber = event.target.value;
    //window.alert(`Your Form submitted:${input.cardNumber}`);
  }
  const fromAccount_buffer = (event) => {
    input.fromAccount = event.target.value;
  }
  const toAccount_buffer = (event) => {
    //window.alert(`Your Form submitted:${JSON.stringify(event.target.value)}`);
    input.toAccount = event.target.value;
  }
  const refNum_buffer = (event) => {
    input.referenceNumber = event.target.value;
  }
  const dateRange_buffer = (event) => {
    //window.alert(`Your Form submitted:${JSON.stringify(event)}`);
    input.dateRange = event;
  }
  const merchantId_buffer =  (event) => {
    input.merchantId = event;
  }

  const handleSubmit = async (formValues) => {
    setFilterData(input);
    //window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    //window.alert(`Your Form submitted:${JSON.stringify(input)}`);
    const response = await api.transactionsSearch.get2(input);
    //window.alert(`Your Form submitted:${JSON.stringify(response)}`);
    const newData = GetNewData();
    //window.alert(`Your Form submitted:${JSON.stringify(newData)}`);
    setData(response.data.content);
  };

  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };

  const tableConfig = {
    isEditable: false,
    isSortable: true,
    isResizable: true,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 50, 100, 1000],
    placeholder: 'Search...',
  };

  let tableUI = (data) => {
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <ReactTableBase
              name={t('instution_type.modify.name_map')}
              key={'searchable'}
              columns={getHeader}
              data={rows}
              updateEditableData={updateEditableData}
              tableConfig={tableConfig}
            />
          </CardBody>
        </Card>
      </Col>
    );
 }

  return (
    <Container>
      <Card>
        <CardBody>
          {/*
          <div className="card__title">
                <h5 className="bold-text">{t('search.transactions.filter.name')}</h5>
          </div>
          */}
          <form className="form" >
            <div>
              <ButtonToolbar className="form__iconButton-toolbar">
                <ButtonGroup className="btn-searchgroup--icons" dir="ltr">
                  <Button outline size="sm" color="primary" onClick={handleSubmit} ><span className="lnr lnr-magnifier" /></Button>
                  <Button outline size="sm" type="button" onClick={reset} disabled={pristine || submitting}><span className="lnr lnr-sync" /></Button>
                </ButtonGroup>
              </ButtonToolbar>
            </div>
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">Transaction Date</span>
                <div className="form__form-group-field">
                  <Field name="dateRange" onChange={dateRange_buffer} component={renderIntervalDatePickerField} type="text" />
                </div>
              </div>
            </div>
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">Merchant ID</span>
                <div className="form__form-group-field">
                  <Field name="merchantId" component={renderField} onChange={merchantId_buffer} type="text" placeholder="003261699" value="003261699"/>
                </div>
              </div>
            </div>
            {/*
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">Card Number</span>
                <div className="form__form-group-field">
                  <Field name="cardNumber" component={renderField} onChange={cardNumber_buffer} type="text" placeholder="Card Number" />
                </div>
              </div>
            </div>
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">Account Number</span>
                <div className="form__form-group-field">
                  <Field name="fromAccount" component={renderField} onChange={fromAccount_buffer} type="text" placeholder="Account Number" />
                </div>
              </div>
            </div>
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">To Account Number</span>
                <div className="form__form-group-field">
                  <Field name="toAccount" component={renderField} onChange={toAccount_buffer} type="text" placeholder="Transfered Account Number" />
                </div>
              </div>
            </div>
            <div className="form__6part">
              <div className="form__form-group">
                <span className="form__form-group-label">Reference Number</span>
                <div className="form__form-group-field">
                  <Field name="referenceNumber" component={renderField} onChange={refNum_buffer} type="text" placeholder="Reference Number" />
                </div>
              </div>
            </div>
            */}
          </form>
        </CardBody>
      </Card>
      {tableUI(rows)}
    </Container>
  );
};

TransactionSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'txn_search', // a unique identifier for this form
  validate,
})(TransactionSearch);

//export default TransactionSearch;
