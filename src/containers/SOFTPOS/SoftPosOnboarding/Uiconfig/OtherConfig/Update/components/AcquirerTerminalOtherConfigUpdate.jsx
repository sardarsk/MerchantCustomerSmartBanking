import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const required = value => value ? undefined : 'Required'
const valueLength = value => value && (value.length > 3 || value.length < 1) ? `Must be 3 characters` : undefined

const WizardOtherConfigUpdate = ({ handleSubmit, selectionData }) => {
  const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
    <div>

      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  const [isRedirect, setIsRedirect] = useState(false);

  const back = () => {
    console.log("back")
    setIsRedirect(true);
  }

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/uiconfigurationOther/view" />;
  }
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Id</span>
              <div className="form__form-group-field">
                <Field name="acquirerId" component="input" type="text" disabled />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Merchant Id</span>
              <div className="form__form-group-field">
                <Field name="merchantId" component="input" type="text" disabled />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Terminal Id</span>
              <div className="form__form-group-field">
                <Field name="terminalId" component="input" type="text" disabled />
              </div>
            </div>
          </div>
          {/*Receipt */}
          <div className="wizard__step wizard__step--active"><p>Receipt</p></div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Screen Receipt Timeout</span>
              <div className="form__form-group-field">
                <Field name="receiptScreenReceiptTimeout" component={renderField} type="number" placeholder="Time in Milli Sec." />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Show Receipt?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="receiptShowReceipt" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="receiptShowReceipt" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Show Mobile No.?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="receiptShowMobileNumber" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="receiptShowMobileNumber" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Show Email Id?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="receiptShowEmail" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="receiptShowEmail" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Show QR Code?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="receiptShowQr" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="receiptShowQr" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>


          <div className="wizard__step wizard__step--active"><p>Customer Copy</p></div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Credit Message</span>
              <div className="form__form-group-field">
                <Field name="customerCreditMessage" component="input" type="text" placeholder="PLEASE CREDIT MY ACCOUNT" />
              </div>
            </div>

          </div>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Debit Message</span>
              <div className="form__form-group-field">
                <Field name="customerDebitMessage"  component="input" type="text" placeholder="Enter Debit Message" />

              </div>
            </div>
          </div>

          {/* First row */}
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Footer Line 1</span>
              <div className="form__form-group-field">
                <Field name="customerFooterLine1" component="input" type="text" placeholder="Enter Footer Line 1" />

              </div>
            </div>
          </div>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Footer Line 2</span>
              <div className="form__form-group-field">
                <Field name="customerFooterLine2" component="input" type="text" placeholder="Enter Footer Line 2" />

              </div>
            </div>
          </div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Pin Entry Message</span>
              <div className="form__form-group-field">
                <Field name="customerPinEntryMessage" component="input" type="text" placeholder="Enter Pin Entry Message" />

              </div>
            </div>
          </div>


          <div className="form__form-group">
            <span className="form__form-group-label">Print RRN?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="customerPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="customerPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="wizard__step wizard__step--active"><p>Merchant Copy</p></div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Footer Line 1</span>
              <div className="form__form-group-field">
                <Field name="merchantFooterLine1"  label="Footer Line 1" component="input" type="text" placeholder="Enter Footer Line 1" />

              </div>
            </div>
          </div>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Footer Line 2</span>
              <div className="form__form-group-field">
                <Field name="merchantFooterLine2"  label="Footer Line 2" component="input" type="text" placeholder="Enter Footer Line 2" />

              </div>
            </div>
          </div>

          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Pin Entry Message</span>
              <div className="form__form-group-field">
                <Field name="merchantPinEntryMessage"  label="Pin Entry Message" component="input" type="text" placeholder="Enter Pin Entry Message" />
              </div>
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Print RRN?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="merchantPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="merchantPrintRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="wizard__step wizard__step--active"><p>Refund</p></div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Screen Receipt Timeout</span>
              <div className="form__form-group-field">
                <Field name="refundScreenConfirmationTimeout"  component="input" type="number" placeholder="Time in Milli Sec." />
              </div>
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Ask RRN?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="refundAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true}  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="refundAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Ask Auth Code?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="refundAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true}  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="refundAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false}  />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Show Confirmation Screen?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="refundShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true}  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="refundShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="wizard__step wizard__step--active"><p>Void</p></div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Screen Receipt Timeout</span>
              <div className="form__form-group-field">
                <Field  component={renderField} name="voidScreenConfirmationTimeout" type="number" />
              </div>
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Ask RRN?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="voidAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true}  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="voidAskRrn" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>

          <div className="form__form-group">
            <span className="form__form-group-label">Ask Auth Code?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="voidAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="voidAskAuthCode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false}  />
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Show Confirmation Screen?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="voidShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true}  />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="voidShowConfirmationScreen" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>


          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
            <Button color="primary" type="button" className="previous" onClick={() => back()}>Back</Button>

              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Update</Button>
            </ButtonToolbar>
          </div>

        </form>
      </CardBody>
    </Card>
  );
};


WizardOtherConfigUpdate.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = (state, data) => {
  console.log(data) // state
  if (data && data.data && data.data.mapData) {
    return {
      initialValues: {
        acquirerId: data.data.mapData[0].acquirerId,
        merchantId: data.data.mapData[0].merchantId,
        terminalId: data.data.mapData[0].terminalId,
        receiptScreenReceiptTimeout: data.data.mapData[0].receiptScreenReceiptTimeout,
        receiptShowReceipt: data.data.mapData[0].receiptShowReceipt,
        receiptShowMobileNumber: data.data.mapData[0].receiptShowMobileNumber,
        receiptShowEmail: data.data.mapData[0].receiptShowEmail,
        receiptShowQr: data.data.mapData[0].receiptShowQr,
        customerCreditMessage: data.data.mapData[0].customerCreditMessage,
        customerDebitMessage: data.data.mapData[0].customerDebitMessage,
        customerFooterLine1: data.data.mapData[0].customerFooterLine1,
        customerFooterLine2: data.data.mapData[0].customerFooterLine2,
        customerPinEntryMessage: data.data.mapData[0].customerPinEntryMessage,
        customerPrintRrn: data.data.mapData[0].customerPrintRrn,
        // customerPrintRrn:"true",

        merchantFooterLine1: data.data.mapData[0].merchantFooterLine1,
        merchantFooterLine2: data.data.mapData[0].merchantFooterLine2,
        merchantPinEntryMessage: data.data.mapData[0].merchantPinEntryMessage,
        merchantPrintRrn: data.data.mapData[0].merchantPrintRrn,

        voidScreenConfirmationTimeout: data.data.mapData[0].voidScreenConfirmationTimeout,
        voidAskRrn: data.data.mapData[0].voidAskRrn,
        voidAskAuthCode: data.data.mapData[0].voidAskAuthCode,
        voidShowConfirmationScreen: data.data.mapData[0].voidShowConfirmationScreen,

        refundScreenConfirmationTimeout: data.data.mapData[0].refundScreenConfirmationTimeout,
        refundAskRrn: data.data.mapData[0].refundAskRrn,
        refundAskAuthCode: data.data.mapData[0].refundAskAuthCode,
        refundShowConfirmationScreen: data.data.mapData[0].refundShowConfirmationScreen

      }
    }

  }
}

export default connect(mapStateToProps)(reduxForm({ form: 'otherUiConfig_Update', enableReinitialize: true })(WizardOtherConfigUpdate))