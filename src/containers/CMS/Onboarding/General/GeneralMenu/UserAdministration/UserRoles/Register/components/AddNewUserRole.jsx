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
        
        <div className="form__form-group">
          <span className="form__form-group-label">Entity</span>
          <div className="form__form-group-field">
            <Field
              name="usrEntId"
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "000:Center" },
                { value: 2, label: "001:SIB" },
                { value: 2, label: "002:CBI" },
              ]}
              placeholder="Choose Entity Name"
            />
          </div>
        </div>
          
          <div className="form_userRole">
            <div className="form__form-group">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field name="usrName" component="input" type="text" placeholder="Enter Name" />
              </div>
            </div>
          </div>
          <div className="form_userRole">
            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <Field name="usrDespription" component="input" type="text" checked="" onClick={"onClick"} />
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
