import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import renderDatePickerField from '@/shared/components/form/DatePicker';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Card>
    <CardBody>
    <div >
    <h3 className="wizard__title">Fill your personal data</h3></div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__PersonalInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">First Name</span>
          <div className="form__form-group-field">
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Middle Name</span>
          <div className="form__form-group-field">
            <Field name="middleName" component="input" type="text" placeholder="Middle Name" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Last Name</span>
          <div className="form__form-group-field">
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">DOB</span>
          <div className="form__form-group-field">
            <Field name="dob" component={renderDatePickerField} />
            <div className="form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Two row */} 
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POI Type</span>
          <div className="form__form-group-field">
            <Field
              name="poiType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'PAN', label: 'PAN' },
                { value: 'Passport', label: 'Passport' }
              ]}
              placeholder="Choose POI Type"
            />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POI Number</span>
          <div className="form__form-group-field">
            <Field name="poiNumber" component="input" type="text" placeholder="POI Number" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POI Expiry Date</span>
          <div className="form__form-group-field">
            <Field name="poiExpiryDate" component={renderDatePickerField} />
            <div className="form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Three row */} 
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POA Type</span>
          <div className="form__form-group-field">
            <Field
              name="poaType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'PAN', label: 'PAN' },
                { value: 'Passport', label: 'Passport' }
              ]}
              placeholder="Choose POA"
            />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POA Number</span>
          <div className="form__form-group-field">
            <Field name="poaNumber" component="input" type="text" placeholder="POA Number" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">POA Expiry Date</span>
          <div className="form__form-group-field">
            <Field name="poaExpiryDate" component={renderDatePickerField} />
            <div className="form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Four row */} 
      <div className="form__form-group">
      <h4 className="form__form-group-label">Current Address</h4>
        <div className="form__form-group-field">
          <Field name="currentAddrline1" component="textarea" type="text"  placeholder="Door Number, Street, City"/>
        </div>
      </div>

      {/* Five row */} 
      <div className="form__PersonalInfoRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Country</span>
          <div className="form__form-group-field">
            <Field
              name="currentCountry"
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
      <div className="form__PersonalInfoRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">State</span>
          <div className="form__form-group-field">
            <Field
              name="currentState"
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
      <div className="form__PersonalInfoRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Zip/PostalCode</span>
          <div className="form__form-group-field">
            <Field name="currentZipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow5">
        <div className="form__form-group">
          <span className="form__form-group-label">Nationality</span>
          <div className="form__form-group-field">
            <Field
              name="nationality"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Europien', label: 'Europien' },
                { value: 'Emirates', label: 'Emirates' },
                { value: 'American', label: 'American' },
                { value: 'Britan', label: 'Britan' }
              ]}
              placeholder="Choose Nationality"
            />
          </div>
        </div>
      </div>
      {/* Six row */} 
      <div className="form__PersonalInfoRow6">
        <div className="form__form-group">
          <span className="form__form-group-label">Mobile Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow6">
        <div className="form__form-group">
          <span className="form__form-group-label">Alternative Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      
      
      {/* Seven row */} 
      <div className="form__form-group">
      <h4 className="form__form-group-label">Permanent Address</h4>
        <div className="form__form-group-field">
          <Field name="permanentAddrline1" component="textarea" type="text"  placeholder="Door Number, Street, City"/>
        </div>
      </div>

      {/* Eight row */} 
      <div className="form__PersonalInfoRow8">
        <div className="form__form-group">
          <span className="form__form-group-label">Country</span>
          <div className="form__form-group-field">
            <Field
              name="permanentCountry"
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
      <div className="form__PersonalInfoRow8">
        <div className="form__form-group">
          <span className="form__form-group-label">State</span>
          <div className="form__form-group-field">
            <Field
              name="permanentState"
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
      <div className="form__PersonalInfoRow8">
        <div className="form__form-group">
          <span className="form__form-group-label">Zip/PostalCode</span>
          <div className="form__form-group-field">
            <Field name="permanentZipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      {/*
      <div className="form__PersonalInfoRow8">
        <div className="form__form-group">
          <span className="form__form-group-label">Nationality</span>
          <div className="form__form-group-field">
            <Field
              name="nationality"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Europien', label: 'Europien' },
                { value: 'Indian', label: 'Indian' },
                { value: 'American', label: 'American' },
                { value: 'Britan', label: 'Britan' }
              ]}
              placeholder="Choose Nationality"
            />
          </div>
        </div>
      </div>
      */}
      {/* Nine row 
      <div className="form__PersonalInfoRow9">
        <div className="form__form-group">
          <span className="form__form-group-label">Mobile Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="form__PersonalInfoRow9">
        <div className="form__form-group">
          <span className="form__form-group-label">Alternative Number</span>
          <div className="form__form-group-field">
            <Field name="mobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      */} 
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
