import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
//import {  Col, Container, Row, Button, ButtonGroup, ButtonToolbar, } from 'reactstrap';

//import AddIcon from '@mui/icons-material/Add';

const WizardFormOne = ({ handleSubmit, previousPage }) => {

   return (
    <Card>
    <CardBody>
    <form className="form" onSubmit={handleSubmit}>
    <div className="form__form-group">
    <h3 className="wizard__title"> Fill all the UI Cofiguration Parameters </h3>
     </div>
    
    
     <div className="form__form-group">
        <div className="form__form-group">
          <span className="form__form-group-label">Image Slider File Path</span>
          <div className="form__form-group-field">
            <Field name="imagesliderpath" component="input" type="text" placeholder="Copy and Paste the Path "/>
            
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
