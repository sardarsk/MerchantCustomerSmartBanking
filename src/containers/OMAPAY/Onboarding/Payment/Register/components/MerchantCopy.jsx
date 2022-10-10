import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
//import {  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, } from 'reactstrap';

import EyeIcon from 'mdi-react/EyeIcon';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';

import renderSelectField from '@/shared/components/form/Select';
import renderToggleButtonField from '@/shared/components/form/ToggleButton';
import MaskedInput from 'react-text-mask';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';



const WizardFormOne = ({ handleSubmit, previousPage }) => {

   return (
    <Card>
    <CardBody>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form__form-group">
    <h3 className="wizard__title"> Fill all the UI Cofiguration Parameters </h3>
     </div>
    
    
    {/* First row */} 
    <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Footer Line 1</span>
          <div className="form__form-group-field">
            <Field name="footerline1" component="input" type="text" placeholder="Enter Footer Line 1"/>
            
          </div>
        </div>
      </div>
      <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Footer Line 2</span>
          <div className="form__form-group-field">
            <Field name="footerline2" component="input" type="text" placeholder="Enter Footer Line 2"/>
            
          </div>
        </div>
      </div>
     
      <div className="form__form-group">
        <div className="form__form-group">
          <span className="form__form-group-label">Pin Entry Message</span>
          <div className="form__form-group-field">
            <Field name="pinentrymessage" component="input" type="text" placeholder="Enter Pin Entry Message"/>
            
          </div>
        </div>
      </div>

      <div className="form__form-group">
                        <span className="form__form-group-label">Print RRN?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="rrnm" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="rrnm" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
                        </div>
        </div>

    <div className="form__OnboardingButton">
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
      <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button color="primary" type="submit" className="next">Next</Button>
      </ButtonToolbar>
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
