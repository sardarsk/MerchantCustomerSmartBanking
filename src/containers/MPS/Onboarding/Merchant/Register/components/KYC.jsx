import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Button, ButtonGroup, ButtonToolbar, Col, Container, Row } from 'reactstrap';
import POIFileUpload from './KYC/POIFileUpload';
import ShopLicenseFileUpload from './KYC/ShopLicenseFileUpload';
import GSTCertificateFileUpload from './KYC/GSTCertificateFileUpload';
import POAFileUpload from './KYC/POAFileUpload';
import ChequeFileUpload from './KYC/ChequeFileUpload';
import showResults from '../Show';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Container>
      <Row>
        <POIFileUpload onSubmit={showResults}/>
        <POAFileUpload onSubmit={showResults}/>
        <ShopLicenseFileUpload />
        <GSTCertificateFileUpload />
        <ChequeFileUpload />
      </Row>
      <Row>
      {/*
      <div className="form__OnboardingButton">
        <ButtonToolbar className="form__iconButton-toolbar">
          <ButtonGroup className="btn-stagegroup--icons" dir="ltr">
            <Button outline size="sm" color="primary" type="button" onClick={previousPage}><span className="lnr lnr-chevron-left-circle" /></Button>
            <Button outline size="sm" color="primary" type="button" onClick={handleSubmit}><span className="lnr lnr-chevron-right-circle" /></Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      */}
      </Row>
      
      <div className="form__OnboardingButton">
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" onClick={previousPage}>Back</Button>
        <Button color="primary" type="submit" className="next" onClick={handleSubmit}>Submit</Button>
      </ButtonToolbar>
      </div>
    </Container>
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
