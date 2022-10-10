import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';


import renderRadioButtonField from '@/shared/components/form/RadioButton';
import renderSelectField from '@/shared/components/form/Select';

import MaskedInput from 'react-text-mask';


const renderField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} />
);

const WizardFormOne = ({ handleSubmit }) => {

 return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <h4 className="wizard__title"><center> Fill Merchant Informations </center> </h4>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer</span>
              <div className="form__form-group-field">
                <Field
                  name="acquirer"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 1, label: "ADIB_SPOS" },
                  ]}
                  placeholder="Choose Acquirer Name"
                />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">MCC Type</span>
              <div className="form__form-group-field">
                <Field
                  name="mccType"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 5411, label: 'Grocery Stores & Supermarkets' },
                    { value: 4214, label: 'Local Delivery Services' },
                    { value: 4411, label: 'Courier Service' }
                  ]}
                  placeholder="Choose MCC Type"
                />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Name</span>
              <div className="form__form-group-field">
                <Field name="merchantName" component="input" type="text" placeholder="Merchant Name" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Country</span>
              <div className="form__form-group-field">
                <Field
                  name="country"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: 'United Arab Emirates' }

                  ]}
                  placeholder="Choose Region"
                />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Emirates</span>
              <div className="form__form-group-field">
                <Field
                  name="emirates"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 1, label: 'Abu Dhabi' },
                    { value: 2, label: 'Ajman ' },
                    { value: 3, label: 'Fujairah' },
                    { value: 4, label: 'Dubai' },
                    { value: 5, label: 'Ras Al Kima' },
                    { value: 6, label: 'Sharjah' },
                    { value: 7, label: 'Umm Al-Quwain' },
                  ]}
                  placeholder="Choose Emirates"
                />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Currency</span>
              <div className="form__form-group-field">
                <Field
                  name="currency"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: 'Dirham' }
                  ]}
                  placeholder="Choose Currency"
                />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Address</span>
              <div className="form__form-group-field">
                <Field name="merchantAdd1" component="input" type="text" placeholder="Merchant Address" />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Street Name</span>
              <div className="form__form-group-field">
                <Field name="merchantAdd2" component="input" type="text" placeholder="Merchant Street Name" />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Landmark</span>
              <div className="form__form-group-field">
                <Field name="merchantAdd3" component="input" type="text" placeholder="Merchant Landmark" />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">ZipCode</span>
              <div className="form__form-group-field">
                <Field name="zipcode" component="input" type="text" placeholder="Enter ZipCode" />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">LandLine Number</span>
              <div className="form__form-group-field">
                <Field name="landLine" component="input" type="text" placeholder="Merchant LandLine No." />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Mobile No.</span>
              <div className="form__form-group-field">
                <Field name="mobileno" component="input" type="text" placeholder="Merchant Mobile No." />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Email Id</span>
              <div className="form__form-group-field">
                <Field name="emailId" component="input" type="text" placeholder="Merchant Email Id" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Maximum Terminal Count</span>
              <div className="form__form-group-field">
                <Field name="temcount" component="input" type="text" placeholder="Enter Max. Terminal Count" />
              </div>
            </div>
          </div> 

          <div className="form__form-group">
            <span className="form__form-group-label">Is any Branch using SofPos?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="branch" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" defaultChecked />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="branch" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
            </div>
          </div>

          <div className="form__form-group">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Logo Image Path</span>
              <div className="form__form-group-field">
                <Field name="imagesliderpath" component="input" type="text" placeholder="Logo Path " />

              </div>
            </div>
          </div>


          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="button" className="previous" disabled>Back</Button>
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
