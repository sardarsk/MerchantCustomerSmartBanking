import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar, Table } from 'reactstrap';
const required = value => value ? undefined : 'Required'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && ((error && <span  className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)
const WizardFormOne = ({ handleSubmit, previousPage, selectionData }) => {
  let selectionDataList = [];
  if (Object.keys(selectionData).length > 0) {
    selectionData.securityKeyTypeDefinitions.map(item => {
      selectionDataList.push({ "label": item.name, "value": item.guid });
    })
  }


  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <h4 className="wizard__title"><center> Security Key Config </center> </h4>
          </div>
          {/* {
            selectionDataList.length > 0 && selectionDataList.map(data => (
              <>
                <div className="form__SalesInfo">
                  <div className="form__form-group">
                    <span className="form__form-group-label">Security Key Type</span>
                    <div className="form__form-group-field">
                      <Field
                        name="securityKeyType"
                        component={renderSelectField}
                        type="text"
                        options={selectionDataList}
                        placeholder="Choose Security Key Type"
                      />
                    </div>
                  </div>
                </div>

                <div className="form__SalesInfo">
                  <div className="form__form-group">
                    <span className="form__form-group-label">Private Key Input</span>
                    <div className="form__form-group-field">
                      <Field name="privateKeyInput" component="input" type="text" placeholder="Private Key Input" />
                    </div>
                  </div>
                </div>

                <div className="form__SalesInfo">
                  <div className="form__form-group">
                    <span className="form__form-group-label">Public Key Input</span>
                    <div className="form__form-group-field">
                      <Field name="publicKeyInput" component="input" type="text" placeholder="Public Key Input" />
                    </div>
                  </div>
                </div>

                <div className="form__SalesInfo">
                  <div className="form__form-group">
                    <span className="form__form-group-label">LMK KVC</span>
                    <div className="form__form-group-field">
                      <Field name="lmkKvc" component="input" type="text" placeholder="Key KVC" />
                    </div>
                  </div>
                </div>

                <div className="form__SalesInfo">
                  <div className="form__form-group">
                    <span className="form__form-group-label">Key Length</span>
                    <div className="form__form-group-field">
                      <Field name="keyLength" component="input" type="text" placeholder="Key KVC" />
                    </div>
                  </div>
                </div>
              </>
            ))

          } */}

          <Table className="table--bordered" responsive>
            <thead>
              <tr>

                <td>Security Key Type</td>
                <td>Private Key</td>
                <td>Public Key</td>
                <td>LMK KVC</td>
                <td>Key Length</td>
              </tr>
            </thead>
            <tbody>
              {selectionDataList.length > 0 && selectionDataList.map(item => (
                <tr>
                  <td>{item.label}</td>
                  <td>
                    <div className="form__form-group-field">
                      <Field name={"privateKeyInput "+item.value} component={renderField}   label="Private Key Input"  type="text" placeholder="Private Key Input" />
                    </div>

                  </td>
                  <td>
                    <div className="form__form-group-field">
                      <Field name={"publicKeyInput "+item.value} type="text" placeholder="Public Key Input"  component={renderField}   label="Private Key Input"  />
                    </div>
                  </td>
                  <td>
                    <div className="form__form-group-field">
                      <Field name={"lmkKvc "+item.value} type="text"   component={renderField}   label="Key KVC" />
                    </div>
                  

                  </td>
                  <td>
                  <div className="form__form-group-field">
                      <Field name={"keyLength "+item.value} component={renderField} type="number"   label="key Length" />
                    </div>
                  </td>
                </tr>
                // <tr key={item.id}>
                //   <td>{item.id}</td>
                //   <td>{item.first}</td>
                //   <td>{item.last}</td>
                //   <td>{item.username}</td>
                //   <td><Badge color={item.status}>{item.badge}</Badge></td>
                // </tr>
              ))}
            </tbody>
          </Table>



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
