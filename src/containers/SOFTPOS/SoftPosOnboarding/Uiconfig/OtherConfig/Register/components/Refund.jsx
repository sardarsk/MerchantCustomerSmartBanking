import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
const required = value => value ? undefined : 'Required'
const valueLength = value  => value && (value.length > 3 || value.length < 1 ) ? `AtMost 3 characters` : undefined

const WizardFormOne = ({ handleSubmit, previousPage }) => {

    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form_ui-config">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Screen Receipt Timeout</span>
                            <div className="form__form-group-field">
                                <Field name="refundScreenConfirmationTimeout" validate = {[required,valueLength]} component="input" type="number" placeholder="Time in Milli Sec." />
                            </div>
                        </div>
                    </div>

                    <div className="form__form-group">
                        <span className="form__form-group-label">Ask RRN?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="refundAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="refundAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" />
                        </div>
                    </div>

                    <div className="form__form-group">
                        <span className="form__form-group-label">Ask Auth Code?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="refundAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true" defaultChecked />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="refundAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false" defaultChecked/>
                        </div>
                    </div>
                   
                    <div className="form__form-group">
                        <span className="form__form-group-label">Show Confirmation Screen?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="refundShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="true"  defaultChecked/>
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="refundShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="false"  />
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
