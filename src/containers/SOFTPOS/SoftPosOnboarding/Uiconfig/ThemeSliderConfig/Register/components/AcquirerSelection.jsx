import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import renderSelectField from '@/shared/components/form/Select';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';

const required = value => value ? undefined : 'Required'

const WizardFormOne = ({ handleSubmit,selectionData }) => {
  var acquirerDefinitions = [];
  if (Object.keys(selectionData).length > 0) {
    selectionData.map(item => {
      acquirerDefinitions.push({ "label": item.acquirerId+" ("+item.description+")", "value": item.acquirerId });
    })
  }
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
              validate = {required}
              type="text"
              options={acquirerDefinitions}
              label="Choose Acquirer Name"
              placeholder="Choose Acquirer Name"
            />
          </div>
        </div>
      </div>
      {/* <div className="form__half">
        <div className="form__form-group">
          <span className="form__form-group-label">Acquirer Id</span>
          <div className="form__form-group-field">
            <Field
              name="acquirerId"
              component={renderSelectField}
              type="text"
              options={[
                { value: 30000005, label: "30000005" },
               
              ]}
              placeholder="Choose Acquirer Id"
            />
          </div>
        </div>
      </div> */}

    
    <div className="form__OnboardingButton">
      <ButtonToolbar className="form__button-toolbar wizard__toolbar">
        <Button color="primary" type="button" className="previous" disabled>Back</Button>
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
