import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar, Table } from 'reactstrap';

const WizardFormOneAcquirerKey = ({ handleSubmit, selectionData }) => {
  let acquirerDefinitions = [];
  let acquirerKeys = [];
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  if (Object.keys(selectionData).length > 0) {
    selectionData.acquirerDefinitions.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerName, "value": item.guid });
    })

    selectionData.acquirerKeyTypeDefinitions.map(item => {
      acquirerKeys.push({ "label": item.name + " (" + item.keyUsageType + " - " + item.description + ")", "value": item.guid });
    })

  }

  return (
    <Card>
      <CardBody>

        <form className="form" onSubmit={handleSubmit}>
        <div className="form__form-group">
            <h4 className="wizard__title"><center> Acquirer Key Configuration </center> </h4>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Name</span>
              <div className="form__form-group-field">
                <Field
                  name="acquirer"
                  component={renderSelectField}
                  type="text"
                  label="Choose Acquirer Name"
                  options={acquirerDefinitions}
                  placeholder="Choose Acquirer Name"
                />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Key Type</span>
              <div className="form__form-group-field">
                <Field
                  name="acquirerKeyType"
                  component={renderSelectField}
                  type="text"
                  options={acquirerKeys}
                  placeholder="Select Acquirer Key Type"
                />
              </div>
            </div>
          </div>

          <Table className="table--bordered" responsive>
            <thead>
              <tr>
                <td><b><u>Key Under LMK</u></b></td>
                <td></td>
                <td><b><u>Key KVC</u></b></td>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td> 
                    <Field component={renderField} name="keyUnderLmk" type="text" />
                  </td>
                  <div className="form__form-group-field">
                    <td></td>
                    </div>
                  <td>
                    <div className="form__form-group-field">
                      <Field name="keyKvc" type="text" component={renderField}   />
                    </div>
                  </td>
                </tr>
       
            </tbody>
          </Table>
          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
            </ButtonToolbar>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

WizardFormOneAcquirerKey.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard_acquirer_key', //                 <------ same form name
  destroyOnUnmount: true, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneAcquirerKey);
