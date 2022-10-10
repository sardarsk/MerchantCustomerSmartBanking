import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import renderRadioButtonField from '@/shared/components/form/RadioButton';

const WizardFormOne = ({ handleSubmit, previousPage }) => {

    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>

                    <div className="form_ui-config">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Screen Receipt Timeout</span>
                            <div className="form__form-group-field">
                                <Field name="screentimeout" component="input" type="text" placeholder="Time in Milli Sec." />
                            </div>
                        </div>
                    </div>


                    <div className="form__form-group">
                        <span className="form__form-group-label">Show Receipt?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="receipt" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="receipt" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
                        </div>
                    </div>
                    <div className="form__form-group">
                        <span className="form__form-group-label">Show Mobile No.?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="mobileno" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="mobileno" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
                        </div>
                    </div>
                    <div className="form__form-group">
                        <span className="form__form-group-label">Show Email Id?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="emailId" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="emailId" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
                        </div>
                    </div>
                    
                    <div className="form__form-group">
                        <span className="form__form-group-label">Show QR Code?</span>
                        <div className="form__form-group-field">
                            <div className="payment__credit-card">
                                <Field name="qr" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" defaultChecked/>
                            </div>
                        </div>
                        <div className="payment__credit-card">
                            <Field name="qr" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no"  />
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
