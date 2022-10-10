import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar, Table } from 'reactstrap';

const WizardFormOne = ({ handleSubmit, selectionData }) => {
  let securityKeyType = [];

  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  if (Object.keys(selectionData).length > 0) {
      selectionData.securityKeyTypeDefinitions.map(item => {
      securityKeyType.push({ "label": item.name, "value": item.guid });
    })

  }

  return (
    <Card>
      <CardBody>

        <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
            <h4 className="wizard__title"><center> Security Key Configuration </center> </h4>
          </div>
          
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Security Key Type</span>
              <div className="form__form-group-field">
                <Field
                  name="securityKeyType"
                  component={renderSelectField}
                  type="text"
                  options={securityKeyType}
                  placeholder="Select Acquirer Key Type"
                />
              </div>
            </div>
          </div>
         <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Security Key Name</span>
              <div className="form__form-group-field">
                <Field name="name" component="input" type="text" placeholder="Security Key Name"/>
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Security Key Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Security Key Description" />
              </div>
            </div>
          </div>
          
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Private Key</span>
              <div className="form__form-group-field">
                <Field name="privateKey" component="input" type="text" placeholder="Enter Private Key" />
              </div>
            </div>
          </div>
          

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Public Key</span>
              <div className="form__form-group-field">
                <Field name="publicKey" component="input" type="text" placeholder="Enter Public Key" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Private Key Under LMK</span>
              <div className="form__form-group-field">
                <Field name="privateKeyUnderLmk" component="input" type="text" placeholder="Enter Private Key Under LMK" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">LMK KVC</span>
              <div className="form__form-group-field">
                <Field name="lmkKcv" component="input" type="text" placeholder="nter LMK KVC" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">LMK Slot ID</span>
              <div className="form__form-group-field">
                <Field name="lmkSlotId" component="input" type="text" placeholder="Enter LMK Slot Id" />
              </div>
            </div>
          </div>
          
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Key Length</span>
              <div className="form__form-group-field">
                <Field name="keyLength" component="input" type="text" placeholder="Key Length" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Key Expiry Date</span>
              <div className="form__form-group-field">
                <Field name="keyExpireDate" component="input" type="text" placeholder="MM/DD" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Key Exponent</span>
              <div className="form__form-group-field">
                <Field name="keyExponent" component="input" type="text" placeholder="Enter Key Exponent" />
              </div>
            </div>
          </div>

          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
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
