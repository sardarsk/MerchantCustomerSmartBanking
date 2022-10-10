import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>    

          <div className="form_modules">
            <div className="form__form-group">
              <span className="form__form-group-label">Code</span>
              <div className="form__form-group-field">
                <Field name="apmCode" component="input" type="text" placeholder="Enter Code" />
              </div>
            </div>
          </div>
          
          <div className="form_modules">
            <div className="form__form-group">
              <span className="form__form-group-label">Name</span>
              <div className="form__form-group-field">
                <Field name="apmName" component="input" type="text" placeholder="Enter Name" />
              </div>
            </div>
          </div>
          <div className="form_modules">
            <div className="form__form-group">
              <span className="form__form-group-label">Menu Id</span>
              <div className="form__form-group-field">
                <Field name="apmMenuId" component="input" type="text" placeholder="Enter Menu Id" />
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
