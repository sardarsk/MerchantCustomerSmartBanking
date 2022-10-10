import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  
  return (
    <Card>
    <CardBody>
    <h3 className="wizard__title">Choose Settlement programe</h3>

    <form className="form" onSubmit={handleSubmit}>
      <div className="form__SettlementRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Settlement Type</span>
          <div className="form__form-group-field">
            <Field
              name="settlementType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Direct', label: 'Direct' },
                { value: 'Mediater', label: 'Mediater' }
              ]}
              placeholder="Choose Type"
            />
          </div>
        </div>
      </div>
      <div className="form__SettlementRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Settlement Period</span>
          <div className="form__form-group-field">
            <Field
              name="settlementPeriod"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Daily', label: 'Daily' }
              ]}
              placeholder="Choose Period"
            />
          </div>
        </div>
      </div>
     
      <div className="form__OnboardingHeader">
        <h4 className="form__form-group-label">Additional Settlement Information</h4>
      </div>
      <div className="form__SettlementRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">Statement Type</span>
          <div className="form__form-group-field">
            <Field
              name="settlementPeriod"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Excel', label: 'Excel' },
                { value: 'PDF', label: 'PDF' },
              ]}
              placeholder="Choose Type"
            />
          </div>
        </div>
      </div>
      <div className="form__SettlementRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">Statement Contact Name</span>
          <div className="form__form-group-field">
            <Field name="statementContactName" component="input" type="text" placeholder="Name" />
          </div>
        </div>
      </div>
      <div className="form__SettlementRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">To Mail</span>
          <div className="form__form-group-field">
            <Field name="statementToEmail" component="input" type="email" placeholder="example@mail.com" />
          </div>
        </div>
      </div>
      <div className="form__SettlementRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">CC Mail</span>
          <div className="form__form-group-field">
            <Field name="statementCCEmail" component="input" type="email" placeholder="example@mail.com" />
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

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
