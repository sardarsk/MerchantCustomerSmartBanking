import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const required = value => value ? undefined : 'Required'
const WizardFormOneAppList = ({ handleSubmit, selectionData }) => {
    var tmsMasterAids = [];
    var tmsMasterTransactionTypes = [];
    const [aidId, setAidId] = useState("00000000000000");
    if (Object.keys(selectionData).length > 0) {
        if (Object.keys(selectionData.tmsMasterAids).length > 0) {
            selectionData.tmsMasterAids.map(item => {
                tmsMasterAids.push({ "label": item.name, "value": item.id, "aid": item.aid });
            })
        }
        if (Object.keys(selectionData.tmsMasterTransactionTypes).length > 0) {
            selectionData.tmsMasterTransactionTypes.map(item => {
                tmsMasterTransactionTypes.push({ "label": item.transactionTypeName, "value": item.transactionType, "transactionType": item.transactionType });
            })
        }
    }


    const onChangeAid = async (event) => {
        console.log(" Triggered")
        console.log(event)
        if (event !== undefined) {
            setAidId(event.aid)
        }
    }

    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>

                    <div className="form_softpos" >
                        <div className="form__form-group">
                            <span className="form__form-group-label">Kernel</span>
                            <div className="form__form-group-field" >
                                <Field
                                    disabled
                                    name="kernelId"
                                    onChange={event => {
                                        onChangeAid(event)
                                    }
                                    }
                                    validate={required}
                                    component={renderSelectField}
                                    type="text"
                                    options={tmsMasterAids}
                                    placeholder="Choose Kernel"
                                />
                            </div>
                        </div>
                    </div>


                    <div className="form__SalesInfo">
                        <div className="form__form-group">
                            <span className="form__form-group-label">AID </span>
                            <div className="form__form-group-field">
                                <span className="form__form-group-label">{aidId} </span>
                            </div>
                        </div>
                    </div>
                    <div className="form_softpos">
                        <div className="form__form-group">
                            <span className="form__form-group-label">Transcation Type</span>
                            <div className="form__form-group-field">
                                <Field
                                    name="transactionType"
                                    validate={required}
                                    component={renderSelectField}
                                    type="text"
                                    options={tmsMasterTransactionTypes}
                                    placeholder="Choose Transcation Type"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form__OnboardingButton">
                        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
                            <Button color="primary" type="submit" className="next">Next</Button>
                        </ButtonToolbar>
                    </div>

                </form>
            </CardBody>
        </Card>
    );
};

WizardFormOneAppList.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
    form: 'wizard_app_list', //                 <------ same form name
    destroyOnUnmount: true, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneAppList);
