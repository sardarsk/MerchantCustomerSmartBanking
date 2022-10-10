import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, FieldArray, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import { connect } from 'react-redux';
import renderRadioButtonField from '@/shared/components/form/RadioButton';
import { Redirect } from 'react-router';

const required = value => value ? undefined : 'Required'

const valueLength = value => value && (value.length > 7 || value.length < 7) ? `Must be 6 characters` : undefined
const startWithHash = value => value && value[0] != `#` ? `Start with Hash` : undefined


const renderMembers = ({ data, fields, meta: { error, submitFailed } }) => (
  <ul>
    {/* <li>
      <button type="button" onClick={() => fields.push({ guid: 0})}>
        Add Image path
      </button>
      {submitFailed && error && <span>{error}</span>}
    </li> */}
    {fields.map((image, index) => (
      <li key={index}>
        {/* <button
          type="button"
          title="Remove Member"
          onClick={() => fields.remove(index)}
        /> */}
        <h4>Image Slider #{index + 1}</h4>
        <Field
          name={`${image}.imagePath`}
          type="text"
          component="input"
          label="Image Path"
        />
      </li>
    ))}
  </ul>
)






const ThemeSliderUpdateForm = ({ handleSubmit, selectionData, data }) => {
  var acquirerDefinitions = []
  // if (allAcquirer && allAcquirer != null) {
  //   console.log("acquirerDefinitions  : " + acquirerDefinitions)
  //   if (Object.keys(allAcquirer).length > 0) {
  //     allAcquirer.map(item => {
  //       acquirerDefinitions.push({ "label": item.acquirerId + " (" + item.description + ")", "value": item.acquirerId });
  //     })
  //   }
  // }
  const [isRedirect, setIsRedirect] = useState(false);

  const back = () => {
    console.log("back")
    setIsRedirect(true);
  }

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/uiconfigurationtheme/view" />;
  }

  const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
    <div>
      {/* <label>{label}</label> */}
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>
  )
  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__half">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer</span>
              <div className="form__form-group-field">
                <Field
                  name="acquirerDefinition"
                  component={renderSelectField}
                  validate={required}
                  type="text"
                  options={acquirerDefinitions}
                  label="Choose Acquirer Name"
                  placeholder="Choose Acquirer Name"
                  disabled={true}
                />
              </div>
            </div>
          </div>


          <div className="wizard__step wizard__step--active"><p>Theme Two</p></div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary</span>
              <div className="form__form-group-field">
                <Field name="primary1" validate={[required, startWithHash, valueLength]} label="Primary" component={renderField} type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Primary</span>
              <div className="form__form-group-field">
                <Field name="onPrimary" validate={[required, startWithHash, valueLength]} label="On-Primary" component={renderField} type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary-Variant</span>
              <div className="form__form-group-field">
                <Field name="primaryVariant" validate={[required, startWithHash, valueLength]} label="Primary-Variant" component={renderField} type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary</span>
              <div className="form__form-group-field">
                <Field name="secondary" validate={[required, startWithHash, valueLength]} label="Secondary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Secondary</span>
              <div className="form__form-group-field">
                <Field name="onSecondary" validate={[required, startWithHash, valueLength]} label="On-Secondary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary Variant</span>
              <div className="form__form-group-field">
                <Field name="secondaryVariant" validate={[required, startWithHash, valueLength]} label="Secondary Variant" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Background</span>
              <div className="form__form-group-field">
                <Field name="background" validate={[required, startWithHash, valueLength]} label="Background" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Background</span>
              <div className="form__form-group-field">
                <Field name="onBackground" validate={[required, startWithHash, valueLength]} label="On-Background" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface</span>
              <div className="form__form-group-field">
                <Field name="surface" validate={[required, startWithHash, valueLength]} label="Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Surface</span>
              <div className="form__form-group-field">
                <Field name="onSurface" validate={[required, startWithHash, valueLength]} label="On-Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error</span>
              <div className="form__form-group-field">
                <Field name="error" validate={[required, startWithHash, valueLength]} label="Error" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Error</span>
              <div className="form__form-group-field">
                <Field name="onError" validate={[required, startWithHash, valueLength]} label="On-Error" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Light Required?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="lightRequired" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="lightRequired" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>


          <div className="wizard__step wizard__step--active"><p>Theme Three</p></div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary</span>
              <div className="form__form-group-field">
                <Field label="Primary" component={renderField} name="primary1ThemeThree" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary</span>
              <div className="form__form-group-field">
                <Field name="onPrimaryThemeThree" label="On Primary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary Container</span>
              <div className="form__form-group-field">
                <Field name="primaryContainerThemeThree" label="Primary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary Container</span>
              <div className="form__form-group-field">
                <Field name="onPrimaryContainerThemeThree" label="Primary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary</span>
              <div className="form__form-group-field">
                <Field name="secondaryThemeThree" label="Secondary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary</span>
              <div className="form__form-group-field">
                <Field name="onSecondaryThemeThree" label="On Secondary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="secondaryContainerThemeThree" label="Secondary Container" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="onSecondaryContainerThemeThree" label="On Secondary Container" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary</span>
              <div className="form__form-group-field">
                <Field name="tertiaryThemeThree" label="Tertiary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Tertiary</span>
              <div className="form__form-group-field">
                <Field name="onTertiaryThemeThree" label="Primary" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary Container</span>
              <div className="form__form-group-field">
                <Field name="tertiaryContainerThemeThree" label="Tertiary Container" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Background</span>
              <div className="form__form-group-field">
                <Field name="backgroundThemeThree" label="Background" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Background</span>
              <div className="form__form-group-field">
                <Field name="onBackgroundThemeThree" label="On-Background" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface</span>
              <div className="form__form-group-field">
                <Field name="surfaceThemeThree" label="Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface</span>
              <div className="form__form-group-field">
                <Field name="onSurfaceThemeThree" label="On Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="surfaceVariantThemeThree" label="Surface Variant" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="onSurfaceVariantThemeThree" label="On Surface Variant" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse Surface</span>
              <div className="form__form-group-field">
                <Field name="inverseSurfaceThemeThree" label="Inverse Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse On Surface</span>
              <div className="form__form-group-field">
                <Field name="inverseOnSurfaceThemeThree" label="Inverse On Surface" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error</span>
              <div className="form__form-group-field">
                <Field name="errorThemeThree" label="Error" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Outline</span>
              <div className="form__form-group-field">
                <Field name="outlineThemeThree" label="Outline" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error Container</span>
              <div className="form__form-group-field">
                <Field name="errorContainerThemeThree" label="Error Container" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Error Container</span>
              <div className="form__form-group-field">
                <Field name="onErrorContainerThemeThree" label="On Error Container" component={renderField} placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Light Required?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="lightRequiredThemeThree" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue={true} />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="lightRequiredThemeThree" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue={false} />
            </div>
          </div>


          <div className="wizard__step wizard__step--active"><p>Image Slider</p></div>


          <div className="form__form-group">



            <FieldArray name="imageSlider" component={renderMembers} />

            {/* {data && data.imageSliders.map(item => (
              <ul>
                <li>
                  <div className="form__form-group">
                    <span className="form__form-group-label">Image Slider File Path</span>

                    <div className="form__form-group-field">
                      <div className="form__form-group-input-wrap">
                        <Field name={`${item.guid}`} component={renderField} type="text" placeholder="Copy and Paste the Path " />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            ))} */}
          </div>

          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="button" className="previous" onClick={() => back()}>Back</Button>
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
            </ButtonToolbar>

          </div>

        </form>
      </CardBody>
    </Card>
  );
};

ThemeSliderUpdateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state, data) => {
  console.log(data) // state
  if (data && data.data && data.data) {
    return {
      initialValues: {
        acquirerDefinition: { value: data.data.materialThemeTwo[0].acquirerId, label: data.data.materialThemeTwo[0].acquirerId },
        themeTwoId: data.data.materialThemeTwo[0].guid,
        primary1: data.data.materialThemeTwo[0].primary1,
        onPrimary: data.data.materialThemeTwo[0].onPrimary,
        primaryVariant: data.data.materialThemeTwo[0].primaryVariant,
        secondary: data.data.materialThemeTwo[0].secondary,
        onSecondary: data.data.materialThemeTwo[0].onSecondary,
        secondaryVariant: data.data.materialThemeTwo[0].secondaryVariant,
        background: data.data.materialThemeTwo[0].background,
        onBackground: data.data.materialThemeTwo[0].onBackground,
        surface: data.data.materialThemeTwo[0].surface,
        onSurface: data.data.materialThemeTwo[0].onSurface,
        error: data.data.materialThemeTwo[0].error,
        onError: data.data.materialThemeTwo[0].onError,
        lightRequired: data.data.materialThemeTwo[0].lightRequired,
        imageSlider: data.data.imageSliders
      }
    }

  }
}

export default connect(mapStateToProps)(reduxForm({ form: 'themeSliderUpdateForm', enableReinitialize: true })(ThemeSliderUpdateForm))
