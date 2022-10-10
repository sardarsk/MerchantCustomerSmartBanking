import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
const required = value => value ? undefined : 'Required'

const WizardFormOneKernel = ({ handleSubmit, previousPage, selectionData }) => {
    var tmsMasterAids = [];
    var tmsMasterTransactionTypes = [];
    if (Object.keys(selectionData).length > 0) {
        if (Object.keys(selectionData.tmsMasterAids).length > 0) {
            selectionData.tmsMasterAids.map(item => {
                tmsMasterAids.push({ "label": item.name, "value": item.aid });
            })
        }
        if (Object.keys(selectionData.tmsMasterTransactionTypes).length > 0) {
            selectionData.tmsMasterTransactionTypes.map(item => {
                tmsMasterTransactionTypes.push({ "label": item.transactionTypeName, "value": item.transactionType, "transactionType": item.transactionType });
            })
        }
    }

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
                    <div className="form_softpos">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Kernel</span>
                            <div className="form__form-group-field" style={{ pointerEvents: 'none',   opacity: 0.7 }}>
                                <Field
                                    disabled
                                    name="kernelId"
                                    component={renderSelectField}
                                    type="text"
                                    options={tmsMasterAids}
                                    placeholder="Choose Kernel"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form_softpos">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Transcation Type</span>
                            <div className="form__form-group-field" style={{ pointerEvents: 'none',   opacity: 0.7 }}>
                                <Field
                                    name="transactionType"
                                    component={renderSelectField}
                                    type="text"
                                    options={tmsMasterTransactionTypes}
                                    placeholder="Choose Transcation Type"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__form-group">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Tag Data</span>
                            <div className="form__form-group-field">
                                <Field name="kernalTagData" component="input" type="text" placeholder="Enter Tag Data" />
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

WizardFormOneKernel.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'wizard_kernel', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneKernel);
