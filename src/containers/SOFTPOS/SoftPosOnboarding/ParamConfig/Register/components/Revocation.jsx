import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
const required = value => value ? undefined : 'Required'

const WizardFormOneRevocation = ({ handleSubmit, previousPage }) => {

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
                                <Field name="rid" component={renderField} validate={required} label="RID" type="text" placeholder="Enter RID" />
                            </div>
                        </div>
                    </div>

                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">PK_Index</span>
                            <div className="form__form-group-field">
                                <Field name="pkIndex" component={renderField} validate={required} label="Cert Serial" type="text" placeholder="Enter PK_Index" />
                            </div>
                        </div>
                    </div>
                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Cert Serial</span>
                            <div className="form__form-group-field">
                                <Field name="certSerial" component={renderField} validate={required} label="Cert Serial" type="text" placeholder="Enter Key Cert Serial" />
                            </div>
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

WizardFormOneRevocation.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'wizard_revocation', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneRevocation);
