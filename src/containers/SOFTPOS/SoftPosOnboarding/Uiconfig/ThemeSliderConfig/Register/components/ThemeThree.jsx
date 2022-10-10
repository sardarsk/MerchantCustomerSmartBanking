import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const required = false
const WizardFormOne = ({ handleSubmit, previousPage,selectionData }) => {
  const renderField = ({ input, label,placeholder, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} placeholder={placeholder} type={type}/>
        {touched && ((error && <span  className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary</span>
              <div className="form__form-group-field">
                <Field validate = {required} label="Primary" component={renderField}  name="primary1ThemeThree" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary</span>
              <div className="form__form-group-field">
                <Field name="onPrimaryThemeThree" validate = {required} label="On Primary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary Container</span>
              <div className="form__form-group-field">
                <Field name="primaryContainerThemeThree" validate = {required} label="Primary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary Container</span>
              <div className="form__form-group-field">
                <Field name="onPrimaryContainerThemeThree" validate = {required} label="Primary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary</span>
              <div className="form__form-group-field">
                <Field name="secondaryThemeThree" validate = {required} label="Secondary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary</span>
              <div className="form__form-group-field">
                <Field name="onSecondaryThemeThree" validate = {required} label="On Secondary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="secondaryContainerThemeThree" validate = {required} label="Secondary Container" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="onSecondaryContainerThemeThree" validate = {required} label="On Secondary Container" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary</span>
              <div className="form__form-group-field">
                <Field name="tertiaryThemeThree" validate = {required} label="Tertiary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Tertiary</span>
              <div className="form__form-group-field">
                <Field name="onTertiaryThemeThree" validate = {required} label="Primary" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary Container</span>
              <div className="form__form-group-field">
                <Field name="tertiaryContainerThemeThree" validate = {required} label="Tertiary Container" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Background</span>
              <div className="form__form-group-field">
                <Field name="backgroundThemeThree" validate = {required} label="Background" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Background</span>
              <div className="form__form-group-field">
                <Field name="onBackgroundThemeThree" validate = {required} label="On-Background" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface</span>
              <div className="form__form-group-field">
                <Field name="surfaceThemeThree" validate = {required} label="Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface</span>
              <div className="form__form-group-field">
                <Field name="onSurfaceThemeThree" validate = {required} label="On Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="surfaceVariantThemeThree" validate = {required} label="Surface Variant" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="onSurfaceVariantThemeThree" validate = {required} label="On Surface Variant" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse Surface</span>
              <div className="form__form-group-field">
                <Field name="inverseSurfaceThemeThree" validate = {required} label="Inverse Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse On Surface</span>
              <div className="form__form-group-field">
                <Field name="inverseOnSurfaceThemeThree" validate = {required} label="Inverse On Surface" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error</span>
              <div className="form__form-group-field">
                <Field name="errorThemeThree" validate = {required} label="Error" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Outline</span>
              <div className="form__form-group-field">
                <Field name="outlineThemeThree" validate = {required} label="Outline" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error Container</span>
              <div className="form__form-group-field">
                <Field name="errorContainerThemeThree" validate = {required} label="Error Container" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Error Container</span>
              <div className="form__form-group-field">
                <Field name="onErrorContainerThemeThree" validate = {required} label="On Error Container" component={renderField}  placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Light Required?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="lightRequiredThemeThree" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="lightRequiredThemeThree" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
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
