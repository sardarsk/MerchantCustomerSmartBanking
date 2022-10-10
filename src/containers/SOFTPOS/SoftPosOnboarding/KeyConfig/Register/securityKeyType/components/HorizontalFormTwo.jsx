import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

const WizardFormOne = ({ handleSubmit }) => {
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <h4 className="wizard__title"><center> Security Key Type Config </center> </h4>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Security Key Type Name</span>
              <div className="form__form-group-field">
                <Field name="name" component="input" type="text" placeholder="Eg:-RSA Key Pair" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Security Key Type Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Enter Key Type Description" />
              </div>
            </div>
          </div>
          <ButtonToolbar className="form__button-toolbar">
            <Button color="primary" type="submit">Submit</Button>
          </ButtonToolbar>
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
