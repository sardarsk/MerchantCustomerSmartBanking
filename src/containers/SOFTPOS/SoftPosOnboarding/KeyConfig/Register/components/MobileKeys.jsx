import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

const WizardFormOne = ({ handleSubmit, previousPage }) => {

    return (
        <Card>
            <CardBody>
                <form className="form" onSubmit={handleSubmit}>

                {/* <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Private Key Input</span>
              <div className="form__form-group-field">
              <Field name="privateKeyInput" component="input" type="text" placeholder="Private Key Input" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Public Key Input</span>
              <div className="form__form-group-field">
              <Field name="publicKeyInput" component="input" type="text" placeholder="Public Key Input" />
              </div>
            </div>
          </div>

          <div className="form__SalesInfo">
            <div className="form__form-group">
              <span className="form__form-group-label">Key KVC</span>
              <div className="form__form-group-field">
              <Field name="securityKeyInputKvc" component="input" type="text" placeholder="Key KVC" />
              </div>
            </div>
          </div>*/}

                    
                
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

// WizardFormOne.propTypes = {
//     handleSubmit: PropTypes.func.isRequired,
// };

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
})(WizardFormOne);
