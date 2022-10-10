import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

const AcquirerOnBoardForm = ({ handleSubmit, selectionData }) => {
  let applicationIds = [];
  let mccData = [];
  let cityData = [];
  if (Object.keys(selectionData).length > 0) {
    if (selectionData.tmsAcquirerApplicationIdGenerations) {
      selectionData.tmsAcquirerApplicationIdGenerations.map(item => {
        applicationIds.push({ "label": item.applicationId + "(" + item.description + ")", "value": item.applicationId });
      })
    }


    /*selectionData.tmsMasterMccTypes.map(item => {
      mccData.push({ "label": item.mccTypeDesc, "value": item.mccTypeId });
    })
    selectionData.tmsMasterCities.map(item => {
      cityData.push({ "label": item.cityName, "value": item.cityId });
    })*/
  }
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">SoftPos Application Id</span>
              <div className="form__form-group-field">
                <Field
                  name="applicationId"
                  component={renderSelectField}
                  type="text"
                  options={applicationIds}
                  placeholder="ChooseApplication Id"
                />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Id</span>
              <div className="form__form-group-field">
                <Field name="acquirerId" component="input" type="text" placeholder="Enter Acquirer Id" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Code</span>
              <div className="form__form-group-field">
                <Field name="acquirerCode" component="input" type="text" placeholder="Eg:- ADIB" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Name</span>
              <div className="form__form-group-field">
                <Field name="acquirerName" component="input" type="text" placeholder="Eg:- Abu Dhabi Islamic Bank" />
              </div>
            </div>
          </div>


          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Enter Description" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Address</span>
              <div className="form__form-group-field">
                <Field name="address" component="input" type="text" placeholder="Eg:- Enter Address" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Country</span>
              <div className="form__form-group-field">
                <Field
                  name="tmsMasterCountry"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: "United Arab Emirates" },
                  ]}
                  placeholder="Choose Country Name "
                />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Currency</span>
              <div className="form__form-group-field">
                <Field
                  name="tmsMasterCurrency"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: "Dirham" },
                  ]}
                  placeholder="Choose Currency"
                />
              </div>
            </div>
          </div>


          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Email Id</span>
              <div className="form__form-group-field">
                <Field name="emailId" component="input" type="text" placeholder="Email Id" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Contact Number</span>
              <div className="form__form-group-field">
                <Field name="contactNo" component="input" type="text" placeholder="Eg:- 02 610 0600" />
              </div>
            </div>
          </div>

          <div className="form__form-group">
            <div className="form__form-group">
              <span className="form__form-group-label">Logo File Path</span>
              <div className="form__form-group-field">
                <Field name="institutionLogoImagePath" component="input" type="text" placeholder="Copy and Paste the Path " />
              </div>
            </div>
          </div>

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

AcquirerOnBoardForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'acquirerOnBoardForm', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(AcquirerOnBoardForm);
