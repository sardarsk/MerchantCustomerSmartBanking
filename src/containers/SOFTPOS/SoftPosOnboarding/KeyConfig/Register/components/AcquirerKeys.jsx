import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar, Table, } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const required = value => value ? undefined : 'Required'
const WizardFormOne = ({ handleSubmit, selectionData }) => {
  console.log("selectdata");
  console.log(selectionData);
  let acquirerDefinitions = [];
  let acquirerKeys = [];
  // var numbers = [...Array(5).keys()];
  if (Object.keys(selectionData).length > 0) {
    selectionData.acquirerDefinitions.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerName, "value": item.guid });
    })

    selectionData.acquirerKeyTypeDefinitions.map(item => {
      acquirerKeys.push({ "label": item.name +"-->"+ item.keyUsageType, "value": item.guid });
    })

    console.log(acquirerDefinitions);
    console.log(acquirerKeys);
  }
  const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span  className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  return (
   

    <Card>
      <CardBody>
          <form className="form" onSubmit={handleSubmit}>
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

        <Table className="table--bordered" responsive>
          <thead>
            <tr>

              <td><b><u>Acquirer Key Type</u></b></td>
              <td><b><u>Key Under LMK</u></b></td>
              <td><b><u>Key KVC</u></b></td>
            </tr>
          </thead>
          <tbody>
            {acquirerKeys.length > 0 && acquirerKeys.map(item => (
              <tr>
                <td>{item.label}
                    <input type="hidden" name={"acquirerKeyTypeDefinitions "+item.value} value={item.value}/>
                </td>
                <td> <div className="form__form-group-field">
                  <Field component={renderField}   name={"Key_Under_LMK " + item.value} type="text" label="Key Under LMK" placeholder="Key Under LMK" />
                </div></td>
                <td>
                  <div className="form__form-group-field">
                    <Field name={"Key_KVC " + item.value} type="text" component={renderField} label = "Key KVC" placeholder="Key KVC" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="form__OnboardingButton">
          <ButtonToolbar className="form__button-toolbar wizard__toolbar">
            <Button color="primary" type="button" className="previous" disabled>Back</Button>
            <Button color="primary" type="submit"  className="next">Next</Button>
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

