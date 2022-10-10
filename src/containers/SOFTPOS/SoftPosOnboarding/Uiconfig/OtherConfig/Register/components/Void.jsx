import React, { } from 'react';
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
    console.log("hereee")

    // const getPreviceFormData = async (formData) => {
    //     window.alert(`You submitted:\n\n${JSON.stringify(formData, null, 2)}`);
    //   };

    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>            
                    <div className="form_ui-config">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Screen Receipt Timeout</span>
                            <div className="form__form-group-field">
                                <Field validate = {[required,valueLength]} label ="Screen Receipt Timeout" component={renderField} name="voidScreenConfirmationTimeout" type="number" placeholder="Time in Milli Sec." />
                            </div>
                        </div>
                    </div>

                    <div className="form__form-group">
                        <span className="form__form-group-label">Ask RRN?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="voidAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="voidAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" />
                        </div>
                    </div>

                    <div className="form__form-group">
                        <span className="form__form-group-label">Ask Auth Code?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="voidAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="voidAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" defaultChecked/>
                        </div>
                    </div>
                    <div className="form__form-group">
                        <span className="form__form-group-label">Show Confirmation Screen?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="voidShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="voidShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" />
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
    form: 'otherUiConfig', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
