import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderTimePickerField from '@/shared/components/form/TimePicker';
import DayPickerTest from '@/shared/components/form/DayPickerTest';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit, previousPage, themeName }) => {
  var day_buffer = {
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
    sun: false
  };
  const [day, setDay] = useState(day_buffer);

  const mon_buffer = (event) => {
    if(day.mon) day.mon = false;
    else day.mon = true;
    setDay(day);
    window.alert(event.target.value+" "+JSON.stringify(day));
  };
  const tue_buffer = (event) => {
    if(day.tue) day.tue = false;
    else day.tue = true;
    setDay(day);
  };
  const wed_buffer = (event) => {
    if(day.wed) day.wed = false;
    else day.wed = true;
    setDay(day);
  };
  const thu_buffer = (event) => {
    if(day.thu) day.thu = false;
    else day.thu = true;
    setDay(day);
  };
  const fri_buffer = (event) => {
    if(day.fri) day.fri = false;
    else day.fri = true;
    setDay(day);
  };
  const sat_buffer = (event) => {
    if(day.sat) day.sat = false;
    else day.sat = true;
    setDay(day);
  };
  const sun_buffer = (event) => {
    if(day.sun) day.sun = false;
    else day.sun = true;
    setDay(day);
  };

  return (
    <Card>
    <CardBody>
    <h3 className="wizard__title">Fill your Risk data</h3>

    <form className="form" onSubmit={handleSubmit}>

    <div className="form__RiskInfoRow1">
    <span className="form__form-group-label">Business Days</span>
      <div class="weekDays-selector">
        <input type="checkbox" onChange={mon_buffer} id="weekday-mon" class="weekday" />
        <label for="weekday-mon">Mon</label>
        <input type="checkbox" onChange={tue_buffer} id="weekday-tue" class="weekday" />
        <label for="weekday-tue">Tue</label>
        <input type="checkbox" onChange={wed_buffer} id="weekday-wed" class="weekday" />
        <label for="weekday-wed">Wed</label>
        <input type="checkbox" onChange={thu_buffer} id="weekday-thu" class="weekday" />
        <label for="weekday-thu">Thu</label>
        <input type="checkbox" onChange={fri_buffer} id="weekday-fri" class="weekday" />
        <label for="weekday-fri">Fri</label>
        <input type="checkbox" onChange={sat_buffer} id="weekday-sat" class="weekday" />
        <label for="weekday-sat">Sat</label>
        <input type="checkbox" onChange={sun_buffer} id="weekday-sun" class="weekday" />
        <label for="weekday-sun">Sun</label>
      </div>
    </div>
      <div className="form__RiskInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Business Start Hours</span>
          <Field
            name="startTime"
            component={renderTimePickerField}
            theme={themeName}
          />
        </div>
      </div>
      <div className="form__RiskInfoRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Business End Hours</span>
          <Field
            name="endTime"
            component={renderTimePickerField}
            theme={themeName}
          />
        </div>
      </div>
      <div className="form__OnboardingHeader">
      <h4 className="form__form-group-label">Freq Count Check per minutes</h4>
      </div>
      <div className="form__RiskInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">Transactions</span>
          <div className="form__form-group-field">
            <Field
              name="freqOfTransactionsInMinutes"
              component={renderSelectField}
              type="text"
              options={[
                { value: '1', label: '1' },
                { value: '2', label: '2' },
                { value: '3', label: '3' },
                { value: '4', label: '4' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>
      <div className="form__RiskInfoRow2">
        <div className="form__form-group">
          <span className="form__form-group-label">Type</span>
          <div className="form__form-group-field">
            <Field
              name="freqOfTransactionsType"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'CR', label: 'CR' },
                { value: 'DR', label: 'DR' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>

      <div className="form__OnboardingHeader">
      <h4 className="form__form-group-label">Freq Count Check per hours</h4>
      </div>

      {/* Five row */} 
      <div className="form__RiskInfoRow3">
        <div className="form__form-group">
          <span className="form__form-group-label">Max Declined Transactions</span>
          <div className="form__form-group-field">
            <Field
              name="declinedTransactionsInHours"
              component={renderSelectField}
              type="text"
              options={[
                { value: '1', label: '<1' },
                { value: '2', label: '<2' },
                { value: '3', label: '<3' },
                { value: '4', label: '<4' },
                { value: '5', label: '<5' },
                { value: '10', label: '<10' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>
      <div className="form__RiskInfoRow3">
        <div className="form__form-group">
          <span className="form__form-group-label">Max Successful Transactions</span>
          <div className="form__form-group-field">
            <Field
              name="successTransactionsInHours"
              component={renderSelectField}
              type="text"
              options={[
                { value: '1', label: '<1' },
                { value: '2', label: '<2' },
                { value: '3', label: '<3' },
                { value: '4', label: '<4' },
                { value: '5', label: '<5' },
                { value: '10', label: '<10' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>

      <div className="form__OnboardingHeader">
      <h4 className="form__form-group-label">Security Check Limit</h4>
      </div>
      <div className="form__RiskInfoRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">Max Wrong PIN per Day</span>
          <div className="form__form-group-field">
            <Field
              name="maxWrongPIN"
              component={renderSelectField}
              type="text"
              options={[
                { value: '1', label: '<1' },
                { value: '2', label: '<2' },
                { value: '3', label: '<3' },
                { value: '4', label: '<4' },
                { value: '5', label: '<5' },
                { value: '10', label: '<10' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>
      <div className="form__RiskInfoRow4">
        <div className="form__form-group">
          <span className="form__form-group-label">Max Wrong OTP Tried</span>
          <div className="form__form-group-field">
            <Field
              name="maxWrongOTP"
              component={renderSelectField}
              type="text"
              options={[
                { value: '1', label: '<1' },
                { value: '2', label: '<2' },
                { value: '3', label: '<3' },
                { value: '4', label: '<4' },
                { value: '5', label: '<5' },
                { value: '10', label: '<10' }
              ]}
              placeholder="Choose count"
            />
          </div>
        </div>
      </div>

      <div className="form__OnboardingHeader">
      <h4 className="form__form-group-label">Limit Groups</h4>
      </div>
      <div className="form__RiskInfoRow6">
        <div className="form__form-group">
          <span className="form__form-group-label">Freq Based Limit Group</span>
          <div className="form__form-group-field">
            <Field
              name="freqBasedLimitGroup"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Disable', label: 'Disable' },
                { value: 'Default', label: 'Default' },
                { value: 'FREQ_GRP_HDFC', label: 'FREQ_GRP_HDFC' },
                { value: 'FREQ_GRP_AMEX', label: 'FREQ_GRP_AMEX' }
              ]}
              placeholder="Choose Limit"
            />
          </div>
        </div>
      </div>
      <div className="form__RiskInfoRow6">
        <div className="form__form-group">
          <span className="form__form-group-label">Amount Based Limit Group</span>
          <div className="form__form-group-field">
            <Field
              name="amountBasedLimitGroup"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Disable', label: 'Disable' },
                { value: 'Default', label: 'Default' },
                { value: 'AMT_GRP_HDFC', label: 'AMT_GRP_HDFC' },
                { value: 'AMT_GRP_AMEX', label: 'AMT_GRP_AMEX' }
              ]}
              placeholder="Choose Limit"
            />
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
