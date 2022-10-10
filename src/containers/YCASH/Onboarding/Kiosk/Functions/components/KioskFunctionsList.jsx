import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Card>
    <CardBody>
    <form className="form" onSubmit={handleSubmit}>
    
       <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Kiosk Terminal ID</span>
          <div className="form__form-group-field">
            <Field
              name="kioskTerminalId"
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "ABCD1234" },
                { value: 2, label: "ABCD1244" },
              ]}
              placeholder="Choose Terminal Name"
            />
          </div>
        </div>
      </div>

      <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">kiosk Function List</span>
          <div className="form__form-group-field">
            <Field
              name="kioskFunctionList"
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "Cash Withdrawal" },
                { value: 2, label: "Cash Deposit" },
              ]}
              placeholder="Choose Kiosk Function"
            />
          </div>
        </div>
      </div>

      
     
    <div className="form__OnboardingButton">
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" disabled>Back</Button>
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
