import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const WizardFormOne = ({ handleSubmit, previousPage }) => {

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary</span>
              <div className="form__form-group-field">
                <Field name="primary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary</span>
              <div className="form__form-group-field">
                <Field name="onprimary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Primary Container</span>
              <div className="form__form-group-field">
                <Field name="primarycontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Primary Container</span>
              <div className="form__form-group-field">
                <Field name="onprimarycontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary</span>
              <div className="form__form-group-field">
                <Field name="secondary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary</span>
              <div className="form__form-group-field">
                <Field name="onsecondary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="secondarycontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Secondary Container</span>
              <div className="form__form-group-field">
                <Field name="onsecondarycontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary</span>
              <div className="form__form-group-field">
                <Field name="tertiary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Tertiary</span>
              <div className="form__form-group-field">
                <Field name="ontertiary" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Tertiary Container</span>
              <div className="form__form-group-field">
                <Field name="tertiarycontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Background</span>
              <div className="form__form-group-field">
                <Field name="background" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On-Background</span>
              <div className="form__form-group-field">
                <Field name="onbackground" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface</span>
              <div className="form__form-group-field">
                <Field name="surface" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface</span>
              <div className="form__form-group-field">
                <Field name="onsurface" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="surfacevariant" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Surface Variant</span>
              <div className="form__form-group-field">
                <Field name="onsurfacevariant" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse Surface</span>
              <div className="form__form-group-field">
                <Field name="inversesurface" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Inverse On Surface</span>
              <div className="form__form-group-field">
                <Field name="inverseonsurface" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error</span>
              <div className="form__form-group-field">
                <Field name="error" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Outline</span>
              <div className="form__form-group-field">
                <Field name="outline" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">Error Container</span>
              <div className="form__form-group-field">
                <Field name="errorcontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>

          <div className="form_ui-config">
            <div className="form__form-group">
              <span className="form__form-group-label">On Error Container</span>
              <div className="form__form-group-field">
                <Field name="onerrorcontainer" component="input" type="text" placeholder="Eg:#FFFFFF" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
            <span className="form__form-group-label">Light Required?</span>
            <div className="form__form-group-field">
              <div className="payment__credit-card">
                <Field name="paymentMode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">Yes</p></div>} radioValue="yes" />
              </div>
            </div>
            <div className="payment__credit-card">
              <Field name="paymentMode" component={renderRadioButtonField} label={<div><p className="payment__credit-name">No</p></div>} radioValue="no" defaultChecked />
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
