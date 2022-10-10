import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import { connect } from 'react-redux';

// const AcquirerOnBoardUpdateForm = props  =>{
//  const { handleSubmit,data} = props
//  console.log(data);
const AppListUpdateForm = ({ handleSubmit,data }) => {
 return (
  <Card>
    <CardBody>
      <form className="form" onSubmit={handleSubmit}>
      <div className="form_softpos">
          <div className="form__form-group">
            <span className="form__form-group-label">Kernel</span>
            <div className="form__form-group-field">
              <Field name="kernelId" component="input" type="text"disabled />
            </div>
          </div>
        </div>
         <div className="form_softpos">
          <div className="form__form-group">
            <span className="form__form-group-label">AID</span>
            <div className="form__form-group-field">
              <Field name="aid" component="input" type="text"  disabled/>
            </div>
          </div>
        </div>
        <div className="form_softpos">
          <div className="form__form-group">
            <span className="form__form-group-label">Transcation Type</span>
            <div className="form__form-group-field">
              <Field name="transactionType" component="input" type="text" disabled />
            </div>
          </div>
        </div>
       
       
      <div className="form__OnboardingButton">
          <ButtonToolbar className="form__button-toolbar wizard__toolbar">
          <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Update</Button>
          </ButtonToolbar>
        </div>
      </form>
    </CardBody>
  </Card>
);
}
 

AppListUpdateForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = (state,data) => {
  console.log(data ) // state

  if(data && data.data && data.data.mapData){
    return {
      initialValues: {
        emailId:data.data.mapData[0].emailId,
        address:data.data.mapData[0].address,
        applicationId: data.data.mapData[0].acquirerId,
        acquirerCode:data.data.mapData[0].acquirerCode,
        acquirerName:data.data.mapData[0].acquirerName,
        acquirerId:data.data.mapData[0].acquirerId,
        contactNo:data.data.mapData[0].contactNo,
        tmsMasterCountry: { value: data.data.mapData[0].country.countryIsoNumId, label: data.data.mapData[0].country.countryName },
        tmsMasterCurrency: { value: data.data.mapData[0].currency.currencyId, label: data.data.mapData[0].currency.currencyDesc },
        description:data.data.mapData[0].description,
        guid:data.data.mapData[0].guid
      }
  }
  
  }
}
// export default reduxForm({
//   form: 'acquirerOnBoardForm', //                 <------ same form name
//   destroyOnUnmount: false, //        <------ preserve form data
//   forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
// })(AcquirerOnBoardForm);
export default connect(mapStateToProps)(reduxForm({ form: 'AppListUpdateForm', enableReinitialize: true})(AppListUpdateForm))