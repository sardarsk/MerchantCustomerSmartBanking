import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar} from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const WizardFormOneMerchantRegistration = ({ handleSubmit, selectionData }) => {


  let acquirerDefinitions = [];
  let mccData = [];
  let cityData=[];
  if (Object.keys(selectionData).length > 0) {
    selectionData.acquirerAcquirerDefinition.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerName, "value": item.guid });
    })

    selectionData.tmsMasterMccTypes.map(item => {
      mccData.push({ "label": item.mccTypeDesc, "value": item.mccTypeId });
    })
    selectionData.tmsMasterCities.map(item => {
      cityData.push({ "label": item.cityName, "value": item.cityId });
    })
  }

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">
            <h4 className="wizard__title"><center> Fill Merchant Informations </center> </h4>
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

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">MCC Type</span>
              <div className="form__form-group-field">
                <Field
                  name="mccType"
                  component={renderSelectField}
                  type="text"
                  options={mccData}
                  placeholder="Choose MCC Type"
                />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Id</span>
              <div className="form__form-group-field">
                <Field name="merchantId" component="input" type="text" placeholder="Merchant Id" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Name</span>
              <div className="form__form-group-field">
                <Field name="merchantName" component="input" type="text" placeholder="Merchant Name" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
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
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">City Name</span>
              <div className="form__form-group-field">
                <Field
                  name="city"
                  component={renderSelectField}
                  type="text"
                  options={cityData}
                  placeholder="Choose Emirates"
                />
              </div>
            </div>
          </div>
          <div className="form_softpos">
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
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Address</span>
              <div className="form__form-group-field">
                <Field name="merchantAddress" component="input" type="text" placeholder="Merchant Address" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Street Name</span>
              <div className="form__form-group-field">
                <Field name="merchantAddr2" component="input" type="text" placeholder="Merchant Street Name" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Landmark</span>
              <div className="form__form-group-field">
                <Field name="merchantAddr3" component="input" type="text" placeholder="Merchant Landmark" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Merchant Description" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">ZipCode</span>
              <div className="form__form-group-field">
                <Field name="zipCode" component="input" type="text" placeholder="Enter ZipCode" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">LandLine Number</span>
              <div className="form__form-group-field">
                <Field name="landlineNo" component="input" type="text" placeholder="Merchant LandLine No." />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Mobile No.</span>
              <div className="form__form-group-field">
                <Field name="mobileNo" component="input" type="text" placeholder="Eg:-05xxxxxxx" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Email Id</span>
              <div className="form__form-group-field">
                <Field name="emailId" component="input" type="text" placeholder="xxx@xxx.com" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Maximum Terminal Count</span>
              <div className="form__form-group-field">
                <Field name="maxTerminalCount" component="input" type="text" placeholder="Enter Max. Terminal Count" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
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
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
            </ButtonToolbar>
          </div>

        </form>
      </CardBody>
    </Card>
  );
};

WizardFormOneMerchantRegistration.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard_mer_onboarding', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneMerchantRegistration);
