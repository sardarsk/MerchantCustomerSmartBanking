import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const required = value => value ? undefined : 'Required'


const valueLength = value  => value && (value.length > 7 || value.length < 7 ) ? `Must be 6 characters` : undefined
const startWithHash = value => value && value[0] != `#` ? `Start with Hash` : undefined
const maxLength = max => value =>
  value && value.length > 7 ? `Must be 7 characters or less` : undefined
const maxLength7= maxLength(7)
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
const minValue7 = minValue(7)

console.log("hereeee")
const WizardFormOne = ({ handleSubmit, previousPage,selectionData }) => {
  const renderField = ({ input, label,placeholder, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && ((error && <span  className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary</span>
              <div className="form__form-group-field">
                <Field name="primary1"  validate = {[required,startWithHash,valueLength]} label="Primary" component={renderField}  type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Primary</span>
              <div className="form__form-group-field">
                <Field name="onPrimary"  validate =  {[required,startWithHash,valueLength]} label="On-Primary" component={renderField}  type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary-Variant</span>
              <div className="form__form-group-field">
                <Field name="primaryVariant"  validate =  {[required,startWithHash,valueLength]} label="Primary-Variant" component={renderField}  type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary</span>
              <div className="form__form-group-field">
                <Field name="secondary" validate =  {[required,startWithHash,valueLength]} label="Secondary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Secondary</span>
              <div className="form__form-group-field">
                <Field name="onSecondary" validate =  {[required,startWithHash,valueLength]} label="On-Secondary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary Variant</span>
              <div className="form__form-group-field">
                <Field name="secondaryVariant" validate =  {[required,startWithHash,valueLength]} label="Secondary Variant" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Background</span>
              <div className="form__form-group-field">
                <Field name="background" validate =  {[required,startWithHash,valueLength]} label="Background" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Background</span>
              <div className="form__form-group-field">
                <Field name="onBackground" validate =  {[required,startWithHash,valueLength]} label="On-Background" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface</span>
              <div className="form__form-group-field">
                <Field name="surface" validate =  {[required,startWithHash,valueLength]} label="Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Surface</span>
              <div className="form__form-group-field">
                <Field name="onSurface" validate =  {[required,startWithHash,valueLength]} label="On-Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error</span>
              <div className="form__form-group-field">
                <Field name="error" validate =  {[required,startWithHash,valueLength]} label="Error" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Error</span>
              <div className="form__form-group-field">
                <Field name="onError" validate =  {[required,startWithHash,valueLength]} label="On-Error" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Light Required?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="lightRequired" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" />
              </div>
           </div>
            <div className="payment__credit-card">
              <Field name="lightRequired" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" defaultChecked />
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
