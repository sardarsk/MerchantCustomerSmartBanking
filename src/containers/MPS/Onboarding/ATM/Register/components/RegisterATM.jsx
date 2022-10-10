import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import renderDatePickerField from '@/shared/components/form/DatePicker';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import validate from './validate';

const RegisterATMForm = ({  handleSubmit, reset, pristine, submitting }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Card>
    <CardBody>
    <div >
    <h3 className="wizard__title">Fill the ATM Information</h3></div>
    <form className="form" onSubmit={handleSubmit}>
      <div className="ATM-form__RegisterRow1">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">First Name</span>
          <div className="ATM-form__form-group-field">
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow1">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Middle Name</span>
          <div className="ATM-form__form-group-field">
            <Field name="middleName" component="input" type="text" placeholder="Middle Name" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow1">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Last Name</span>
          <div className="ATM-form__form-group-field">
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow1">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">DOB</span>
          <div className="ATM-form__form-group-field">
            <Field name="dob" component={renderDatePickerField} />
            <div className="ATM-form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Two row */} 
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POI Type</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POI Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="poiNumber" component="input" type="text" placeholder="POI Number" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POI Expiry Date</span>
          <div className="ATM-form__form-group-field">
            <Field name="poiExpiryDate" component={renderDatePickerField} />
            <div className="ATM-form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Three row */} 
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POA Type</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POA Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="poaNumber" component="input" type="text" placeholder="POA Number" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow2">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">POA Expiry Date</span>
          <div className="ATM-form__form-group-field">
            <Field name="poaExpiryDate" component={renderDatePickerField} />
            <div className="ATM-form__form-group-icon">
              <CalendarBlankIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Four row */} 
      <div className="ATM-form__form-group">
      <h4 className="ATM-form__form-group-label">Current Address</h4>
        <div className="ATM-form__form-group-field">
          <Field name="OffAddrline1" component="textarea" type="text"  placeholder="Door Number, Street, City"/>
        </div>
      </div>

      {/* Five row */} 
      <div className="ATM-form__RegisterRow5">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Country</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow5">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">State</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow5">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Zip/PostalCode</span>
          <div className="ATM-form__form-group-field">
            <Field name="zipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow5">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Nationality</span>
          <div className="ATM-form__form-group-field">
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
      {/* Six row */} 
      <div className="ATM-form__RegisterRow6">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Mobile Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="mobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow6">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Alternative Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="mobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      
      {/* Seven row */} 
      <div className="ATM-form__form-group">
      <h4 className="ATM-form__form-group-label">Permanent Address</h4>
        <div className="ATM-form__form-group-field">
          <Field name="OffAddrline1" component="textarea" type="text"  placeholder="Door Number, Street, City"/>
        </div>
      </div>

      {/* Eight row */} 
      <div className="ATM-form__RegisterRow8">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Country</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow8">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">State</span>
          <div className="ATM-form__form-group-field">
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
      <div className="ATM-form__RegisterRow8">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Zip/PostalCode</span>
          <div className="ATM-form__form-group-field">
            <Field name="zipCode" component="input" type="text" placeholder="Zip/PostalCode" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow8">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Nationality</span>
          <div className="ATM-form__form-group-field">
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
      {/* Nine row */} 
      <div className="ATM-form__RegisterRow9">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Mobile Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="mobileNumber1" component="input" type="text" placeholder="Mobile Number" />
          </div>
        </div>
      </div>
      <div className="ATM-form__RegisterRow9">
        <div className="ATM-form__form-group">
          <span className="ATM-form__form-group-label">Alternative Number</span>
          <div className="ATM-form__form-group-field">
            <Field name="mobileNumber2" component="input" type="text" placeholder="Alternative Number" />
          </div>
        </div>
      </div>
      <div className="ATM-form__Button">
      <ButtonToolbar className="ATM-form__button-toolbar wizard__toolbar">
        <Button color="primary" type="submit">Submit</Button>
        <Button type="button" onClick={reset} disabled={pristine || submitting}>
            Cancel
        </Button>
      </ButtonToolbar>
      </div>
    </form>

    </CardBody>
    </Card>
  );
};

RegisterATMForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form_validation', // a unique identifier for this form
  validate,
})(RegisterATMForm);