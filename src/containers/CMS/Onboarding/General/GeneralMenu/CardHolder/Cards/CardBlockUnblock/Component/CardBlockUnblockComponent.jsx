import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderSelectField from '@/shared/components/form/Select';
import CheckIcon from 'mdi-react/CheckIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import ConfimationDialog from '../../../../../../../../../shared/components/dialog/ConfimationDialog';

const required = value => value ? undefined : 'Required'
const WizardFormOne = ({ handleSubmit, previousPage }) => {
    let cardTypes = [{ "value": "1", "label": "Credit Card" },
    { "value": "2", "label": "Debit Card" }];

    let listOfCards = [{ "value": "1", "label": "123456443345" },
    { "value": "2", "label": "23345546454" }];

    const [open, setOpen] = React.useState(false);
    const [flag, setFlag] = React.useState(false);

    const handleClickOpen = () => {
        console.log("here")
        setFlag(true);
    };

    const agree = () => {
        console.log("getting confimation");
        console.log(handleSubmit);
        handleSubmit();
        setFlag(false);
    }
    const disagree = () => {
        console.log("getting disagree");
        console.log(handleSubmit);
        setFlag(false);

    }
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>
                    <span className="form__form-group-label">Card Type</span>
                    <div className="form__form-group-field">
                        <Field
                            validate={required}

                            name="cardType"
                            component={renderSelectField}
                            type="text"
                            label="Choose Card Type"
                            options={cardTypes}
                            placeholder="Choose Acquirer Name"
                        />
                    </div>

                    <span className="form__form-group-label">Select Card</span>
                    <div className="form__form-group-field">
                        <Field
                            validate={required}

                            name="cardId"
                            component={renderSelectField}
                            type="text"
                            label="Select Card"
                            options={listOfCards}
                            placeholder="Select Card"
                        />
                    </div>
                    {/* 
                    <span className="form__form-group-label_cardGen">Card Number</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <CreditCardIcon />
                        </div>
                        <Field
                            name="username"
                            component="input"
                            type="text"
                            placeholder="Last Six Digit Card Number"
                            className="input-without-border-radius"
                        />
                    </div>

                    <span className="form__form-group-label_cardGen">Expiry Date</span>
                    <div className="form__form-group-field">
                        <div className="form__form-group-icon">
                            <CreditCardIcon />
                        </div>
                        <Field
                            name="expDate"
                            component="input"
                            type="text"
                            placeholder="mm/yyyy"
                            className="input-without-border-radius"
                        />

                    </div>
                    <span className="form__form-group-label_cardGen">Registered Mobile</span>
                    <div className="form__form-group-field">
                        <Field
                            name="registredMobile"
                            component="input"
                            type="text"
                            placeholder="Enter registred Mobile Number"
                            className="input-without-border-radius"
                        />
                        <div className="form__form-group-icon">
                        </div>
                    </div> */}
                    <span className="form__form-group-label_cardGen">Status</span>

                    <div className="form__form-group-field">
                        <Field
                            validate={required}

                            name="card"
                            component={renderRadioButtonField}
                            // eslint-disable-next-line
                            label={<div><p className="payment__credit-name">Block</p></div>}
                            radioValue="card"
                        />
                        <Field
                            validate={required}

                            name="card"
                            component={renderRadioButtonField}
                            // eslint-disable-next-line
                            label={<div><p className="payment__credit-name">Unblock</p></div>}
                            radioValue="card"
                        />
                    </div>
                    <div className="form__OnboardingButton">
                        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
                            <Button color="primary" className="next" onClick={handleClickOpen}>Submit</Button>
                        </ButtonToolbar>
                    </div>

                    <div>
                        {flag === true && (<ConfimationDialog agree={agree} disagree={disagree} title={"Confirmation"} description={"Do you want to block your card"} />)}
                    </div>

                </form>
            </CardBody>
        </Card>
    );
};

// WizardFormOne.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
// };

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
