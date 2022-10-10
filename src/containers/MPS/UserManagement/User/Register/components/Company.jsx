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

    <form className="form" onSubmit={handleSubmit}>
    <h3 className="wizard__title">Fill about company information</h3>
    <h3 className="wizard__title">
    <div className="form__OnboardingButton">
        <ButtonToolbar className="form__iconButton-toolbar">
          <ButtonGroup className="btn-stagegroup--icons" dir="ltr">
            <Button outline size="sm" color="primary" type="button" onClick={previousPage}><span className="lnr lnr-chevron-left-circle" /></Button>
            <Button outline size="sm" color="primary" type="button" onClick={handleSubmit}><span className="lnr lnr-chevron-right-circle" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
    </div>
    </h3>
    
      {/* First row */} 
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Business Type</span>
          <div className="form__form-group-field">
            <Field
              name="plan"
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
            <Field name="merchantName" component="input" type="text" placeholder="Nature of Business" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Merchant Type</span>
          <div className="form__form-group-field">
            <Field
              name="plan"
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
              name="plan"
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
          <span className="form__form-group-label">PAN</span>
          <div className="form__form-group-field">
            <Field name="pan" component="input" type="text" placeholder="PAN" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">GSTIN</span>
          <div className="form__form-group-field">
            <Field name="gstin" component="input" type="text" placeholder="GST Number" />
          </div>
        </div>
      </div>

      {/* Three row */} 
      <div className="form__form-group">
      <span className="form__form-group-label">Door Number, Street, City</span>
        <div className="form__form-group-field">
          <Field name="OffAddrline1" component="textarea" type="text" />
        </div>
      </div>

      {/* Four row */} 
      <div className="form__CompanyRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">Country</span>
          <div className="form__form-group-field">
            <Field
              name="country"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Europe', label: 'Europe' },
                { value: 'India', label: 'India' },
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
              name="state"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Maharastra', label: 'Maharastra' },
                { value: 'Karnataka', label: 'Karnataka' },
                { value: 'Tamilnadu', label: 'Tamilnadu' },
                { value: 'Andhra', label: 'Andhra' }
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
            <Field name="zipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      {/* Five row */} 
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Mobile Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Alternative Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">E-mail</span>
          <div className="form__form-group-field">
            <Field name="email" component="input" type="email" placeholder="example@mail.com" />
          </div>
        </div>
      </div>
      <div className="form__CompanyRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Website</span>
          <div className="form__form-group-field">
            <Field name="website" component="input" type="url" placeholder="https://yourwebsite.net" />
          </div>
        </div>
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
