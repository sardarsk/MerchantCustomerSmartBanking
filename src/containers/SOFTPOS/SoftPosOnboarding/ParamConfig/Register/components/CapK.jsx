import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
const required = value => value ? undefined : 'Required'
const valueLength2 = value => value && (value.length > 2 || value.length < 1) ? `AtMost 2 characters` : undefined
const valueLength4 = value => value && (value.length > 4 || value.length < 4) ? `AtMost 4 characters` : undefined
const valueLength1 = value => value && (value.length > 1 || value.length < 1) ? `AtMost 1 characters` : undefined

const WizardFormOneCapK = ({ handleSubmit, previousPage }) => {
    const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
        <div>
            <div>
                <input {...input} placeholder={placeholder} type={type} />
                {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )
    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>
                   

                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">RID</span>
                            <div className="form__form-group-field">
                                <Field name="capkRid" component={renderField} type="text" placeholder="Enter RID" />
                            </div>
                        </div>
                    </div>
                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Index</span>
                            <div className="form__form-group-field">
                                <Field name="index"  component={renderField} type="text" placeholder="Eg:-00" />
                            </div>
                        </div>
                    </div>
                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Exponent Length</span>
                            <div className="form__form-group-field">
                                <Field name="explen"  component={renderField} type="number" placeholder="Enter Exponent Length" />
                            </div>
                        </div>
                    </div>

                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Exponent</span>
                            <div className="form__form-group-field">
                                <Field name="exponent" label="Exponent" component={renderField} type="number" placeholder="Enter Exponent" />
                            </div>
                        </div>
                    </div>
                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Key Length</span>
                            <div className="form__form-group-field">
                                <Field name="keylen" label="Key Length" component={renderField} type="number" placeholder="Enter Key Length" />
                            </div>
                        </div>
                    </div>
                    <div className="form__form-group">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Modulus</span>
                            <div className="form__form-group-field">
                                <Field name="modulus" component="input" type="text" placeholder="Enter Modulus" />
                            </div>
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

WizardFormOneCapK.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};
export default reduxForm({
    form: 'wizard_capk', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneCapK);
