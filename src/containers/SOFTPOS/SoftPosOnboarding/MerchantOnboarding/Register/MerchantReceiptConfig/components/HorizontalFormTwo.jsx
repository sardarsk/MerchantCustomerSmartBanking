import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import renderSelectField from '@/shared/components/form/Select';
import SoftPosBakendApi from '../../../../../../../utils/api/SoftPosApi/BackendApiList';
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
  return {
    initialValues: {
      slogan1:"THANK YOU MERCHANT",
      slogan2:"PLEASE KEEP THIS COPY",
     
    }
  }
}

const WizardFormOne = ({ handleSubmit, selectionData }) => {

  const [merchantData, setMerchantData] = useState([]);
  let acquirerDefinitions = [];
  if (Object.keys(selectionData).length > 0) {
    selectionData.acquirerAcquirerDefinition.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerName, "value": item.guid });
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
          merchants.push({ "label": item.merchantName, "value": item.merchantId });
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
        <div >
          <h4 className="wizard__title"><center> Configure Merchant Receipt</center></h4>
        </div>
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
                  name="merchant1"
                  component={renderSelectField}
                  type="text"
                  label="Choose Merchant Name"
                  options={merchantData}
                  placeholder="Choose Merchant Name"/>
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Slogan1</span>
              <div className="form__form-group-field">
                <Field name="slogan1" component="input" type="text"/>
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Slogan2</span>
              <div className="form__form-group-field">
                <Field name="slogan2" component="input" type="text" />
              </div>
            </div>
          </div>
          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Visa PreAuth DCC Message</span>
              <div className="form__form-group-field">
                <Field name="visaPreAuthdccMessage" component="input" type="text" placeholder="Enter Visa PreAuth DCC Message" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Master Card PreAuth DCC Message</span>
              <div className="form__form-group-field">
                <Field name="masterCardPreAuthdccMessage" component="input" type="text" placeholder="Enter Master Card PreAuth DCC Message" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">EPP Message</span>
              <div className="form__form-group-field">
                <Field name="eppMessage" component="input" type="text" placeholder="Enter EPP Message" />
              </div>
            </div>
          </div>


          <div className="form__form-group">
            <span className="form__form-group-label">Need to show Card Holder Name?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="cardHolderName" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="cardHolderName" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
            </div>
          </div>


          <div className="form__form-group">
            <span className="form__form-group-label">Need to show Full Card Number?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="fullCardNumber" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" defaultChecked />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="fullCardNumber" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Need to show Expiry Date?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="expiryDate" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" defaultChecked />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="expiryDate" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" />
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

WizardFormOne.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

/*export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);*/
export default connect(mapStateToProps)(reduxForm({ form: 'wizard', enableReinitialize: true})(WizardFormOne))
