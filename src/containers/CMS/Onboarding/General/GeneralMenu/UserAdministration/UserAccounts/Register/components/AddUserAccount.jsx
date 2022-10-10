import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit }) => {

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>    
        
        <div className="form__form-group">
          <span className="form__form-group-label">Entity</span>
          <div className="form__form-group-field">
            <Field
              name="usaEntId"
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "000:Center" },
                { value: 2, label: "001:SIB" },
                { value: 2, label: "002:CBI" },
              ]}
              placeholder="Choose Entity Name"
            />
          </div>
        </div>
        <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Civility</span>
              <div className="form__form-group-field">
                <Field name="usaCivility" component="input" type="text" placeholder="Enter Civility" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Login</span>
              <div className="form__form-group-field">
                <Field name="usaLogin" component="input" type="text" placeholder="Enter Login Name" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">First Name</span>
              <div className="form__form-group-field">
                <Field name="usaFirst" component="input" type="text" placeholder="Enter FirstName" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <Field name="usaLast" component="input" type="text" placeholder="Enter LastName" />
              </div>
            </div>
          </div>

          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Email</span>
              <div className="form__form-group-field">
                <Field name="usaEmail" component="input" type="text" placeholder="Enter Email" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Phone</span>
              <div className="form__form-group-field">
                <Field name="usaPhone" component="input" type="text" />
              </div>
            </div>
          </div>
          <div className="form__form-group">
          <span className="form__form-group-label">Hierarchy</span>
          <div className="form__form-group-field">
            <Field
              name="usaEntId"
              component={renderSelectField}
              type="text"
              options={[
                { value: 1, label: "Center:Hima" },
                { value: 2, label: "SIB:test" },
                { value: 2, label: "CBI:admin" },
              ]}
              placeholder="Choose Hierarchy "
            />
          </div>
        </div>
        <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label"></span>
              <div className="form__form-group-field">
                <Field name="usaPassword" component="input" type="text" placeholder="Enter Password" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Last Name</span>
              <div className="form__form-group-field">
                <Field name="usaPassword" component="input" type="text" placeholder="Enter Password once again" />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Active</span>
              <div className="form__form-group-field">
                <Field name="usaActif" component="input" type="checkbox" checked="" onClick={"onClick"} />
              </div>
            </div>
          </div>
          <div className="form_userAccount">
            <div className="form__form-group">
              <span className="form__form-group-label">Pci</span>
              <div className="form__form-group-field">
                <Field name="usaPci" component="input" type="checkbox" checked="" onClick={"onClick"} />
              </div>
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
