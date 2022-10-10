import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar,Col } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import CreditCardIcon from 'mdi-react/CreditCardIcon';

const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>    
        
        
        <span className="form__form-group-label_cardGen">Card Number</span>
        <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
		<Field
            name="username"
            component="input"
            type="text"
            placeholder="Last Six Digit Card Number"
            className="input-without-border-radius"
          />
         
        </div>
       
      
        <span className="form__form-group-label_cardGen">Expiry Date</span>
        <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
		<Field
            name="expDate"
            component="input"
            type="text"
            placeholder="mm/yyyy"
            className="input-without-border-radius"
          />
         
        </div>
        
       
        <span className="form__form-group-label_cardGen">Registered Mobile</span>
        <div className="form__form-group-field">
		<Field
            name="registredMobile"
            component="input"
            type="text"
            placeholder="Enter registred Mobile Number"
            className="input-without-border-radius"
          />
          <div className="form__form-group-icon">
           </div>
        </div>
       
          
        <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="button" className="cancel">Cancel</Button>
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
            </ButtonToolbar>
          </div>
        </form>
      </CardBody>
    </Card>
    </Col>
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
