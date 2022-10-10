import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
//import {  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, } from 'reactstrap';

import EyeIcon from 'mdi-react/EyeIcon';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import renderDatePickerField from '@/shared/components/form/DatePicker';
import renderSelectField from '@/shared/components/form/Select';
import renderToggleButtonField from '@/shared/components/form/ToggleButton';
import MaskedInput from 'react-text-mask';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
const MasterCard = `${process.env.PUBLIC_URL}/img/for_store/cards/mc.svg`;
const VisaCard = `${process.env.PUBLIC_URL}/img/for_store/cards/visa.svg`;
const PayPal = `${process.env.PUBLIC_URL}/img/for_store/cards/paypal.svg`;

const renderField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} />
);

const WizardFormOne = ({ handleSubmit }) => {

  const cardPaymentOption = () => (
    <div id="results" className="form__form-group">
      <span className="form__form-group-label">Card number</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="card_number"
          component={renderField}
          type="text"
          mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder="xxxx-xxxx-xxxx-xxxx"
        />
      </div>
    </div>
  )

  return (
    <Card>
    <CardBody>
    <form className="form" onSubmit={handleSubmit}>
    <h3 className="wizard__title"> Fill about sales plan and information </h3>
    <h3 className="wizard__title">
    <div className="form__OnboardingButton">
        <ButtonToolbar className="form__iconButton-toolbar">
          <ButtonGroup className="btn-stagegroup--icons" dir="ltr">
            <Button outline size="sm" color="primary" type="button" disabled ><span className="lnr lnr-chevron-left-circle" /></Button>
            <Button outline size="sm" color="primary" type="button" onClick={handleSubmit}><span className="lnr lnr-chevron-right-circle" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
    </div>
    </h3>

    <div className="form__form-group">
      <span className="form__form-group-label">Registration Number</span>
      <div className="form__form-group-field">
        <Field name="registrationNumber" component="input" type="text" placeholder="Name" />
      </div>
    </div>
    {/* First row */} 
    <div className="form__half">
      <div className="form__form-group">
        <span className="form__form-group-label">Registration Date</span>
        <div className="form__form-group-field">
          <Field name="registretionDate" component={renderDatePickerField} />
          <div className="form__form-group-icon">
            <CalendarBlankIcon />
          </div>
        </div>
      </div>
    </div>
      <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Agrement Date</span>
          <div className="form__form-group-field">
            <Field name="agrementDate" component={renderDatePickerField} />
            <div className="form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>
      {/* Second row */} 
      <div className="form__SalesInfo">
        <div className="form__form-group">
          <span className="form__form-group-label">Aggregator</span>
          <div className="form__form-group-field">
            <Field
              name="plan"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Asia Pvt Ltd', label: 'Asia Pvt Ltd' },
                { value: 'UK Merchant Solution', label: 'UK Merchant Solution' }
              ]}
              placeholder="Choose Aggregator"
            />
          </div>
        </div>
      </div>

      <div className="form__SalesInfo">
        <div className="form__form-group">
          <span className="form__form-group-label">Merchant Name</span>
          <div className="form__form-group-field">
            <Field name="merchantName" component="input" type="text" placeholder="Merchant Name" />
          </div>
        </div>
      </div>

      <div className="form__SalesInfo">
        <div className="form__form-group">
          <span className="form__form-group-label">Partner Sharing</span>
          <div className="form__form-group-field">
            <Field name="partnerSharing" component={renderToggleButtonField} defaultChecked />
          </div>
        </div>
      </div>
      <div className="form__SalesInfo">
        <div className="form__form-group">
          <span className="form__form-group-label">Pay Installment</span>
          <div className="form__form-group-field">
            <Field name="payInstallment" component={renderToggleButtonField} defaultChecked />
          </div>
        </div>
      </div>

    {/* Third row */} 
    <div className="form__SalesInfo">
      <div className="form__form-group">
        <span className="form__form-group-label">Region</span>
        <div className="form__form-group-field">
          <Field
            name="plan"
            component={renderSelectField}
            type="text"
            options={[
              { value: 'North', label: 'North' },
              { value: 'East', label: 'East' },
              { value: 'West', label: 'West' },
              { value: 'South', label: 'South' },
            ]}
            placeholder="Choose Region"
          />
        </div>
      </div>
    </div>
    <div className="form__SalesInfo">
      <div className="form__form-group">
        <span className="form__form-group-label">Distributer Type</span>
        <div className="form__form-group-field">
          <Field
            name="plan"
            component={renderSelectField}
            type="text"
            options={[
              { value: 'Direct', label: 'Direct' },
              { value: 'ThirdParty', label: 'Third Party' },
            ]}
            placeholder="Choose Distributer Type"
          />
        </div>
      </div>
    </div>
    <div className="form__SalesInfo">
      <div className="form__form-group">
        <span className="form__form-group-label">Distributer</span>
        <div className="form__form-group-field">
          <Field
            name="plan"
            component={renderSelectField}
            type="text"
            options={[
              { value: 'Go POS', label: 'Go POS' },
              { value: 'Ind Mart', label: 'Ind Mart' },
              { value: 'easy buy', label: 'easy buy' },
            ]}
            placeholder="Choose Distributer"
          />
        </div>
      </div>
    </div>
    <div className="form__SalesInfo">
      <div className="form__form-group">
        <span className="form__form-group-label">Sales Person</span>
        <div className="form__form-group-field">
          <Field
            name="plan"
            component={renderSelectField}
            type="text"
            options={[
              { value: 'Mark Henry', label: 'Mark Henry' },
              { value: 'Raja', label: 'Raja' },
              { value: 'Jhon deo', label: 'Jhon deo' },
            ]}
            placeholder="Choose Sales Person"
          />
        </div>
      </div>
    </div>
    </form>
    </CardBody>
    </Card>
  );
};

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
