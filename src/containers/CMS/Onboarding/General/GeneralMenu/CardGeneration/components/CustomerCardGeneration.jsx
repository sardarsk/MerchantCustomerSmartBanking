import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar, Col } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}>
      <Card>
        <CardBody>
          <form className="form" onSubmit={handleSubmit}>

            <div className="form__form-group">
              <span className="form__form-group-label">Select Bank</span>
              <div className="form__form-group-field">
                <Field
                  name="institutionBank"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 450233, label: "Oma Bank" },
                    { value: 540023, label: " Oma Solution" },
                  ]}
                  placeholder="Select Bank dd"
                />
              </div>
            </div>
            <div className="form__form-group">
              <span className="form__form-group-label">Currency </span>
              <div className="form__form-group-field">
                <Field
                  name="currency"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 450233, label: "DZD-ALGERIA" },
                    { value: 450233, label: "USD-AMERICAN SAMOA" },
                    { value: 450233, label: "EUR-ANDORRA" },
                    { value: 450233, label: "AOA-ANGOLA" },
                    { value: 450233, label: "XCD-ANGUILLA" },
                    { value: 450233, label: "XCD-ANTIGUA AND BARBUDA" },
                    { value: 450233, label: "ARS-ARGENTINA" },
                    { value: 450233, label: "AMD-ARMENIA" },
                    { value: 450233, label: "AWG-ARUBA" },
                    { value: 450233, label: "AUD-AUSTRALIA" },
                    { value: 450233, label: "EUR-AUSTRIA" },
                    { value: 450233, label: "AZN-AZERBAIJAN" },
                    { value: 450233, label: "BSD-BAHAMAS (THE)" },
                    { value: 450233, label: "BHD-BAHRAIN" },
                    { value: 450233, label: "BDT-BANGLADESH" },
                    { value: 450233, label: "BBD-BARBADOS" },
                    { value: 450233, label: "AED-UNITED ARAB EMIRATES" },
                    { value: 450233, label: "OMR-OMAN" },
                    { value: 450233, label: "BHD-Bahrain" },
                    { value: 450233, label: "IQD-Iraq	" },
                    { value: 450233, label: "KWD-Kuwait" },
                    { value: 450233, label: "MVR-Maldives" },
                    { value: 450233, label: "MAD-Morocco" },
                    { value: 450233, label: "SAR-Saudi Arabia" },
                    { value: 450233, label: "PKR-Pakistan" },
                    { value: 450233, label: "QAR-Qatar" },
                    { value: 450233, label: "CAD-Canada	" },
                    { value: 450233, label: "EUR-Germany" },

                  ]}
                  placeholder="Select Currency "
                />
              </div>
            </div>

            {/* <div className="form__form-group">
              <span className="form__form-group-label">Schem</span>
              <div className="form__form-group-field">
                <Field
                  name="schem"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 123, label: "Visa"},
                    { value: 784, label: " Master"},
                  ]}
                  placeholder="Select schem "
                />
              </div>
            </div> */}

            <div className="form__form-group">
              <span className="form__form-group-label">Product</span>
              <div className="form__form-group-field">
                <Field
                  name="product"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 123, label: "Visa-Credit-Gold" },
                    { value: 123, label: "Visa-Credit-Premium" },

                    { value: 784, label: "Visa-Debit-Gold" },
                    { value: 784, label: "Visa-Debit-Premium" },

                    { value: 784, label: "Visa-Prepaid-Gold" },
                    { value: 784, label: "Visa-Prepaid-Premium" },

                    { value: 123, label: "Master-Credit-Gold" },
                    { value: 123, label: "Master-Credit-Premium" },

                    { value: 784, label: "Master-Debit-Gold" },
                    { value: 784, label: "Master-Debit-Premium" },

                    { value: 784, label: "Master-Prepaid-Gold" },
                    { value: 784, label: "Master-Prepaid-Premium" },
                  ]}
                  placeholder="Select Product "
                />
              </div>
            </div>



            <div className="form__OnboardingButton">
              <ButtonToolbar className="form__button-toolbar wizard__toolbar">
                <Button color="primary" type="button" className="cancel">Cancel</Button>
                <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
              </ButtonToolbar>
            </div>
          </form>
        </CardBody>
      </Card>
    </Col>
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
