import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

import renderRadioButtonField from '@/shared/components/form/RadioButton';


const required = value => value ? undefined : 'Required'
const valueLength = value  => value && (value.length > 3 || value.length < 1 ) ? `AtMost 3 characters` : undefined

const WizardFormOne = ({ handleSubmit, previousPage }) => {
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

                    <div className="form__half">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Credit Message</span>
                            <div className="form__form-group-field">
                                <Field name="customerCreditMessage"  validate = {required} label="Credit Message"  component={renderField} type="text" placeholder="PLEASE CREDIT MY ACCOUNT" />
                            </div>
                        </div>
                    </div>
                    <div className="form__half">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Debit Message</span>
                            <div className="form__form-group-field">
                                <Field name="customerDebitMessage"  validate = {required} label="Debit Message"  component={renderField} type="text" placeholder="Enter Debit Message" />

                            </div>
                        </div>
                    </div>

                    {/* First row */}
                    <div className="form__half">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Footer Line 1</span>
                            <div className="form__form-group-field">
                                <Field name="customerFooterLine1"  validate = {required} label="Footer Line 1"  component={renderField}  type="text" placeholder="Enter Footer Line 1" />

                            </div>
                        </div>
                    </div>
                    <div className="form__half">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Footer Line 2</span>
                            <div className="form__form-group-field">
                                <Field name="customerFooterLine2"  validate = {required} label="Footer Line 2"  component={renderField} type="text" placeholder="Enter Footer Line 2" />

                            </div>
                        </div>
                    </div>

                    <div className="form__form-group">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Pin Entry Message</span>
                            <div className="form__form-group-field">
                                <Field name="customerPinEntryMessage"  validate = {required} label="Pin Entry Message"  component={renderField} type="text" placeholder="Enter Pin Entry Message" />

                            </div>
                        </div>
                    </div>


                    <div className="form__form-group">
                        <span className="form__form-group-label">Print RRN?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="customerPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="customerPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" />
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
    form: 'otherUiConfig', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
