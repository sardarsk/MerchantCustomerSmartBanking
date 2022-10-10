import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>    
        <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Module</span>
          <div className="form__form-group-field">
            <Field
              name="afgApmId" // <------ Foreign Key Reference from Module Table, Use Combination of apmCode:apmName
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "ADM:UserAdministration" },
                { value: 2, label: "LOG:Logs" },
                { value: 2, label: "PAR:Parameters" },
              ]}
              placeholder="Choose Module Name"
            />
          </div>
        </div>
        </div>
          <div className="form_functionGroup">
            <div className="form__form-group">
              <span className="form__form-group-label">Code</span>
              <div className="form__form-group-field">
                <Field name="afgCode" component="input" type="text" placeholder="Enter Code" />
              </div>
            </div>
          </div>
          
          <div className="form_functionGroup">
            <div className="form__form-group">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field name="afgName" component="input" type="text" placeholder="Enter Name" />
              </div>
            </div>
          </div>
          <div className="form_functionGroup">
            <div className="form__form-group">
              <span className="form__form-group-label">Menu Id</span>
              <div className="form__form-group-field">
                <Field name="afgMenuId" component="input" type="text" placeholder="Enter Menu Id" />
              </div>
            </div>
          </div>        
                 
        <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="button" className="cancel">Cancel</Button>
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
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
