import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';

import validate from './validate';

const renderField = ({
  input, placeholder, type, meta: { touched, error },
}) => (
  <div className="form__form-group-input-wrap form__form-group-input-wrap--error-above">
    <input {...input} placeholder={placeholder} type={type} />
    {touched && error && <span className="form__form-group-error">{error}</span>}
  </div>
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
};

renderField.defaultProps = {
  placeholder: '',
  meta: null,
  type: 'text',
};

const HorizontalForm = ({
  handleSubmit, reset, pristine, submitting,
}) => {

 
  return (
    <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
      <Card>
        <CardBody>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
            <div className="form__form-group">
              <span className="form__form-group-label">MCC Type Description</span>
              <div className="form__form-group-field">
                <Field
                  name="mccTypeDesc"
                  component={renderField}
                  type="text"
                  placeholder="Enter MCC Description"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">MCC Type Code</span>
              <div className="form__form-group-field">
                <Field
                  name="mccTypeCode"
                  component={renderField}
                  type="text"
                  placeholder="Eg:-0000"
                />
              </div>
            </div>

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button type="button" onClick={reset} disabled={pristine || submitting}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'horizontal_form_validation_two', // a unique identifier for this form
  validate,
})(HorizontalForm);
