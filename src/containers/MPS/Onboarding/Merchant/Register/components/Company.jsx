import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Card>
    <CardBody>
    <div >
      <h3 className="wizard__title">Fill about company information</h3>
    </div>
    <form className="form" onSubmit={handleSubmit}>
    
      {/* First row */} 
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Business Type</span>
          <div className="form__form-group-field">
            <Field
              name="businessType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Public Limited Company', label: 'Public Limited Company' },
                { value: 'Private Limited Company', label: 'Private Limited Company' },
                { value: 'Joint-Venture Company', label: 'Joint-Venture Company' },
                { value: 'Partnership Firm', label: 'Partnership Firm' },
                { value: 'One Person Company', label: 'One Person Company' },
                { value: 'Sole Proprietorship', label: 'Sole Proprietorship' },
                { value: 'Branch Office', label: 'Branch Office' },
                { value: 'Non-Government Organization (NGO)', label: 'Non-Government Organization (NGO)' },
              ]}
              placeholder="Choose Business Type"
            />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Nature of Business</span>
          <div className="form__form-group-field">
            <Field name="natureOfBusiness" component="input" type="text" placeholder="Nature of Business" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Merchant Type</span>
          <div className="form__form-group-field">
            <Field
              name="merchantType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'POS', label: 'POS' },
                { value: 'ECOM', label: 'ECOM' },
                { value: 'Others', label: 'Others' }
              ]}
              placeholder="Choose Merchant Type"
            />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">MCC</span>
          <div className="form__form-group-field">
            <Field
              name="mcc"
              component={renderSelectField}
              type="text"
              options={[
                { value: '6013', label: '6013' },
                { value: '6014', label: '6014' }
              ]}
              placeholder="Choose MCC"
            />
          </div>
        </div>
      </div>

      {/* Two row */} 
      <div className="form__CompanyRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">Company Register Number</span>
          <div className="form__form-group-field">
            <Field name="companyRegisterNumber" component="input" type="text" placeholder="Company Number" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">emiratesId</span>
          <div className="form__form-group-field">
            <Field name="emiratesId" component="input" type="text" placeholder="Emirates Id" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">VAT</span>
          <div className="form__form-group-field">
            <Field name="vat" component="input" type="text" placeholder="VAT Number" />
          </div>
        </div>
      </div>

      {/* Three row */} 
      <div className="form__form-group">
      <span className="form__form-group-label">Door Number, Street, City</span>
        <div className="form__form-group-field">
          <Field name="companyAddrline1" component="textarea" type="text" />
        </div>
      </div>

      {/* Four row */} 
      <div className="form__CompanyRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">Country</span>
          <div className="form__form-group-field">
            <Field
              name="companyCountry"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Europe', label: 'Europe' },
                { value: 'UAE', label: 'UAE' },
                { value: 'UK', label: 'UK' },
                { value: 'USA', label: 'USA' }
              ]}
              placeholder="Choose Country"
            />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">State</span>
          <div className="form__form-group-field">
            <Field
              name="companyState"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Dubai', label: 'Dubai' },
                { value: 'Abudhabi', label: 'Abudhabi' },
                { value: 'Sharjah', label: 'Sharjah' },
                { value: 'Others', label: 'Others' }
              ]}
              placeholder="Choose State"
            />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">Zip/PostalCode</span>
          <div className="form__form-group-field">
            <Field name="companyZipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      {/* Five row */} 
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Mobile Number</span>
          <div className="form__form-group-field">
            <Field name="companyMobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Alternative Number</span>
          <div className="form__form-group-field">
            <Field name="companyMobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <Field name="companyEmail" component="input" type="email" placeholder="example@mail.com" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Website</span>
          <div className="form__form-group-field">
            <Field name="companyWebsite" component="input" type="url" placeholder="https://yourwebsite.net" />
          </div>
        </div>
      </div>

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
