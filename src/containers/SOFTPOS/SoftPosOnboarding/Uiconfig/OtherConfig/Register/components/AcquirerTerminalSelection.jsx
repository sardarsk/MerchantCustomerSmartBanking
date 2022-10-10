import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../../utils/api/SoftPosApi/BackendApiList';




const required = value => value ? undefined : 'Required'
const WizardFormOne = ({ handleSubmit, selectionData }) => {

  const [merchantData, setMerchantData] = useState([
  ]);
  const [terminalData, setTerminalData] = useState([
  ]);



  var acquirerDefinitions = [];
  if (Object.keys(selectionData).length > 0) {
    selectionData.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerName, "value": item.guid, "acquirerId" : item.acquirerId});
    })
  }

  var merchants = [];
  var terminal = [];
  const onChangeAcquirer = async (event) => {
    console.log(" Triggered")
    merchants = [];
    console.log(event)
    if (event !== undefined) {
      var acquirerId = event.value;


      const response = await SoftPosBakendApi.uiConfigApis.GetMerchantByAcquirerId(acquirerId);
      console.log(response);
      if (response.status === 200 && response.data.statusCode === 200) {
        response.data.data.map(item => {
          merchants.push({ "label": item.merchantName, "value": item.merchantId });
        })

        // window.alert(`You submitted:\n\n${JSON.stringify(merchants, null, 2)}`);
        setMerchantData(merchants);
      } else {
        merchants = [];
      }

    }
  }


  const onChangeMerchant = async (event) => {
    console.log(" Triggered")
    terminal = [];
    console.log(event)
    if (event !== undefined) {
      var merchantId = event.value;

      const response = await SoftPosBakendApi.uiConfigApis.GetTerminalByMerchantId(merchantId);
      console.log(response);
      if (response.status === 200 && response.data.statusCode === 200) {
        response.data.data.map(item => {
          terminal.push({ "label": item.terminalId, "value": item.terminalId });
        })

        // window.alert("data: " + terminal)
        setTerminalData(terminal);
      } else {
        terminal = [];
      }

    }
  }



  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer</span>
              <div className="form__form-group-field">
                <Field
                  onChange={event => {
                    onChangeAcquirer(event)
                  }
                  }
                  validate = {required}
                  name="acquirer"
                  component={renderSelectField}
                  type="text"
                  options={acquirerDefinitions}
                  placeholder="Choose Acquirer Name"
                />
              </div>
            </div>
          </div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant</span>
              <div className="form__form-group-field">
                <Field
                  onChange={event => {
                    onChangeMerchant(event)
                  }
                  }
                  validate = {required}
                  name="merchant"
                  component={renderSelectField}
                  type="text"
                  options={merchantData}
                  placeholder="Choose Merchant "
                />
              </div>
            </div>
          </div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Terminal</span>
              <div className="form__form-group-field">
                <Field name="terminal"  validate = {required} component={renderSelectField} type="text" options={terminalData}
                  placeholder="Choose Terminal "
                />
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
  form: 'otherUiConfig', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
