import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';


const WizardFormOneTerminalOnboarding = ({ handleSubmit, selectionData }) => {
  const [merchantData, setMerchantData] = useState([]);
  let acquirerDefinitions = [];
  let txnCurrency = [];
  let country = [];
  if (Object.keys(selectionData).length > 0) {
    selectionData.acquirerAcquirerDefinition.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerId, "value": item.guid });
    })
    selectionData.tmsMasterCurrency.map(item => {
      txnCurrency.push({ "label": item.currencyCodeAlpha3 + " (" + item.currencyDesc + ")", "value": item.currencyId });
    })
    selectionData.tmsMasterCountries.map(item => {
      country.push({ "label": item.countryName, "value": item.countryIsoNumId });
    })

  }
  var merchants = [];

  const onChangeAcquirer = async (event) => {
    merchants = [];
    if (event !== undefined) {
      var acquirerId = event.value;
      const response = await SoftPosBakendApi.uiConfigApis.GetMerchantByAcquirerId(acquirerId);
      if (response.status === 200 && response.data.statusCode === 200) {
        response.data.data.map(item => {
          merchants.push({ "label": item.merchantId, "value": item.merchantId });
        })
        setMerchantData(merchants);
      } else {
        merchants = [];
      }

    }
  }
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
                  options={acquirerDefinitions}
                  placeholder="Choose Acquirer Name" onChange={event => {
                    onChangeAcquirer(event)
                  }
                  }
                />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant</span>
              <div className="form__form-group-field">
                <Field
                  name="merchant"
                  component={renderSelectField}
                  type="text"
                  label="Choose Merchant Name"
                  options={merchantData}
                  placeholder="Choose Merchant Name" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Terminal Id</span>
              <div className="form__form-group-field">
                <Field name="terminalId" component="input" type="text" placeholder="Enter Terminal Id" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Enter Description" />
              </div>
            </div>
          </div>
          {/*<div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Total Txn Per Day</span>
              <div className="form__form-group-field">
                <Field name="txnperday" component="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Total Txn Amount Per Day</span>
              <div className="form__form-group-field">
                <Field name="txnperAmount" component="input" type="text" placeholder="" />
              </div>
            </div>
          </div>
                */}
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Counter Number</span>
              <div className="form__form-group-field">
                <Field name="counterNo" component="input" type="text" placeholder="Enter the Counter No." />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Mobile Number</span>
              <div className="form__form-group-field">
                <Field name="mobilePhone" component="input" type="text" placeholder="Eg:-05xxxxxxx" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Email Id</span>
              <div className="form__form-group-field">
                <Field name="emailAddress" component="input" type="text" placeholder="Eg:-xxx@xxx.com" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <span className="form__form-group-label">Country</span>
            <div className="form__form-group-field">
              <Field
                name="country"
                component={renderSelectField}
                type="text"
                options={country}
                placeholder="Choose Country" />
            </div>
          </div>
          <div className="form_softpos">
            <span className="form__form-group-label">Transaction Currency</span>
            <div className="form__form-group-field">
              <Field
                name="txnCurrency"
                component={renderSelectField}
                type="text"
                options={txnCurrency}
                placeholder="Choose Transaction Currency" />
            </div>
          </div>
          <div className="form_softpos">
            <span className="form__form-group-label">Refer Currency</span>
            <div className="form__form-group-field">
              <Field
                name="referCurrency"
                component={renderSelectField}
                type="text"
                options={txnCurrency}
                placeholder="Refer Currency" />
            </div>
          </div>

          {/*<div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Terminal Capability</span>
              <div className="form__form-group-field">
                <Field name="terminalcapability" component="input" type="text" placeholder="Eg:-E0F0C8" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Add Terminal Capability</span>
              <div className="form__form-group-field">
                <Field name="addTerminalCap" component="input" type="text" placeholder="Eg:-F000F0A001" />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Terminal Type</span>
              <div className="form__form-group-field">
                <Field
                  name="terminalType"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 21, label: "Online Only" },
                  ]}
                  placeholder="Choose Terminal Type "
                />
              </div>
            </div>
          </div>
                */}


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

WizardFormOneTerminalOnboarding.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'wizard_terminal_onboarding', //                 <------ same form name
  destroyOnUnmount: true, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOneTerminalOnboarding);
