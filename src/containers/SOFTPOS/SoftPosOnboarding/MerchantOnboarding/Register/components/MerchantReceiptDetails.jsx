import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Card>
    <CardBody>
    <div >
      <h4 className="wizard__title"><center> Configure Merchant Receipt</center></h4>
    </div>
    <form className="form" onSubmit={handleSubmit}>
    

    <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Slogan1</span>
          <div className="form__form-group-field">
            <Field name="Slogan1" component="input" type="text" placeholder="Enter Slogan 1" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Slogan2</span>
          <div className="form__form-group-field">
            <Field name="Slogan2" component="input" type="text" placeholder="Enter Slogan 2" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Visa PreAuth DCC Message</span>
          <div className="form__form-group-field">
            <Field name="visaPreAuthdccMessage" component="input" type="text" placeholder="Enter Visa PreAuth DCC Message" />
          </div>
        </div>
      </div>
      
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Master Card PreAuth DCC Message</span>
          <div className="form__form-group-field">
            <Field name="masterCardPreAuthdccMessage" component="input" type="text" placeholder="Enter Master Card PreAuth DCC Message" />
          </div>
        </div>
      </div>
      
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">EPP Message</span>
          <div className="form__form-group-field">
            <Field name="eppMessage" component="input" type="text" placeholder="Enter EPP Message" />
          </div>
        </div>
      </div> 
   
   
      <div className="form__form-group">
            <span className="form__form-group-label">Need to show Card Holder Name?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="branch" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes"  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="branch" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked/>
            </div>
          </div>
          

          <div className="form__form-group">
            <span className="form__form-group-label">Need to show Full Card Number?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="cardNo" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes"  defaultChecked/>
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="cardNo" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Need to show Expiry Date?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="expiryDate" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes"  defaultChecked/>
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="expiryDate" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
            </div>
          </div>
      <div className="form__OnboardingButton">
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
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
