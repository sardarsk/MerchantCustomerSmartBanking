import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const AcquirerOnBoardUpdateForm = ({ handleSubmit, data }) => {
  const [isRedirect, setIsRedirect] = useState(false);
  const back = () => {
    console.log("back")
    setIsRedirect(true);
  }
  if (isRedirect) {
    return <Redirect to="/softpos/merchant/institution/view" />;
  }

  return (
    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">SoftPos Application Id</span>
              <div className="form__form-group-field">
                <Field name="applicationId" component="input" type="text" placeholder="Eg:-ADIBOMA0001" disabled />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Id</span>
              <div className="form__form-group-field">
                <Field name="acquirerId" component="input" type="text" placeholder="Enter Acquirer Id" disabled />
              </div>
            </div>
          </div>
          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Code</span>
              <div className="form__form-group-field">
                <Field name="acquirerCode" component="input" type="text" placeholder="Eg:- ADIB" disabled />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Name</span>
              <div className="form__form-group-field">
                <Field name="acquirerName" component="input" type="text" placeholder="Eg:- Abu Dhabi Islamic Bank" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Acquirer Description</span>
              <div className="form__form-group-field">
                <Field name="description" component="input" type="text" placeholder="Enter Description" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Address</span>
              <div className="form__form-group-field">
                <Field name="address" component="input" type="text" placeholder="Eg:- Enter Address" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Country</span>
              <div className="form__form-group-field">
                <Field
                  name="tmsMasterCountry"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: "United Arab Emirates" },
                  ]}
                  placeholder="Choose Country Name "
                />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Currency</span>
              <div className="form__form-group-field">
                <Field
                  name="tmsMasterCurrency"
                  component={renderSelectField}
                  type="text"
                  options={[
                    { value: 784, label: "Dirham" },
                  ]}
                  placeholder="Choose Currency"
                />
              </div>
            </div>
          </div>


          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Email Id</span>
              <div className="form__form-group-field">
                <Field name="emailId" component="input" type="text" placeholder="email Id" />
              </div>
            </div>
          </div>

          <div className="form_softpos">
            <div className="form__form-group">
              <span className="form__form-group-label">Contact Number</span>
              <div className="form__form-group-field">
                <Field name="contactNo" component="input" type="text" placeholder="Eg:- 02 610 0600" />
              </div>
            </div>
          </div>

          <div className="form__form-group">
            <div className="form__form-group">
              <span className="form__form-group-label">Logo File Path</span>
              <div className="form__form-group-field">
                <Field name="institutionLogoImagePath" component="input" type="text" placeholder="Copy and Paste the Path " />
              </div>
            </div>
          </div>


          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar wizard__toolbar">
              <Button color="primary" type="button" className="previous" onClick={() => back()}>Back</Button>
              <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Update</Button>
            </ButtonToolbar>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}


AcquirerOnBoardUpdateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
const mapStateToProps = (state, data) => {
  console.log(data) // state
  if (data && data.data && data.data.mapData) {
    return {
      initialValues: {
        emailId: data.data.mapData[0].emailId,
        address: data.data.mapData[0].address,
        applicationId: data.data.mapData[0].acquirerId,
        acquirerCode: data.data.mapData[0].acquirerCode,
        acquirerName: data.data.mapData[0].acquirerName,
        acquirerId: data.data.mapData[0].acquirerId,
        contactNo: data.data.mapData[0].contactNo,
        tmsMasterCountry: { value: data.data.mapData[0].country.countryIsoNumId, label: data.data.mapData[0].country.countryName },
        tmsMasterCurrency: { value: data.data.mapData[0].currency.currencyId, label: data.data.mapData[0].currency.currencyDesc },
        description: data.data.mapData[0].description,
        guid: data.data.mapData[0].guid,
        institutionLogoImagePath: data.data.mapData[0].institutionLogoImagePath
      }
    }

  }
}
// export default reduxForm({
//   form: 'acquirerOnBoardForm', //                 <------ same form name
//   destroyOnUnmount: false, //        <------ preserve form data
//   forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
// })(AcquirerOnBoardForm);
export default connect(mapStateToProps)(reduxForm({ form: 'acquirerOnBoardForm', enableReinitialize: true })(AcquirerOnBoardUpdateForm))