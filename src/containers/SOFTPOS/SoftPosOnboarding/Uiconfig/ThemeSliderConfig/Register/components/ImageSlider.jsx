import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

const required = value => value ? undefined : 'Required'

const renderField = ({ input, label,placeholder, type, meta: { touched, error, warning } }) => (
  <div>
    {/* <label>{label}</label> */}
    <div>
      <input {...input} placeholder={placeholder} type={type}/>
      {touched && ((error && <span  className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const WizardFormOne = ({ handleSubmit, previousPage,selectionData }) => {

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
           <div className="form__form-group">
            <div className="form__form-group">
              <span className="form__form-group-label">Image Slider File Path</span>
              <div className="form__form-group-field">
                <Field name="imagesliderpath" validate={required} component={renderField} type="text" placeholder="Copy and Paste the Path " />
              </div>
            </div>
                 <div className="form__form-group-field">
                <Field name="imagesliderpath1"  component={renderField} type="text" placeholder="Copy and Paste the Path " />
              </div>
                <div className="form__form-group-field">
                <Field name="imagesliderpath2" component={renderField} type="text" placeholder="Copy and Paste the Path " />
            </div>
            <div className="form__form-group-field">
                <Field name="imagesliderpath3" component={renderField} type="text" />
            </div>
            <div className="form__form-group-field">
                <Field name="imagesliderpath4"  component={renderField} type="text" />
            </div>
          </div>
          <div className="form__OnboardingButton">
                        <ButtonToolbar className="form__button-toolbar wizard__toolbar">
                        <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
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

export default reduxForm({
  form: 'wizard', //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
