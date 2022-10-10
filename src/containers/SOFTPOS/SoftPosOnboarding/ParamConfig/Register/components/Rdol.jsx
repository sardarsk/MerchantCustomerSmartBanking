import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
const required = value => value ? undefined : 'Required'

const WizardFormOneRdol = ({ handleSubmit, previousPage }) => {
    const valueLength2 = value  => value && (value.length > 2 || value.length < 1 ) ? `AtMost 2 characters` : undefined

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
                   
                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Mode</span>
                            <div className="form__form-group-field">
                                <Field name="mode" component={renderField} validate={[required,valueLength2]} type="text" label = "Mode" placeholder="Eg:-00" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form__form-group">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Rdol Data</span>
                            <div className="form__form-group-field">
                                <Field name="rdolData" component="input" type="text" placeholder="Enter Rdol Data" />
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

WizardFormOneRdol.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'wizard_rdol', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneRdol);
