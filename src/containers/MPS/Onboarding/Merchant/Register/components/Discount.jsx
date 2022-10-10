import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';

const WizardFormOne = ({ handleSubmit, previousPage }) => {
  
  return (
    <Card>
    <CardBody>
    <h3 className="wizard__title">Choose Offers programe</h3>

    <form className="form" onSubmit={handleSubmit}>
      <div className="form__DiscountRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Earn Points Group</span>
          <div className="form__form-group-field">
            <Field
              name="earnPointsGroup"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Disable', label: 'Disable' },
                { value: 'Default', label: 'Default' },
                { value: 'EARNPT_GRP_HDFC', label: 'EARNPT_GRP_HDFC' },
                { value: 'EARNPT_GRP_AMEX', label: 'EARNPT_GRP_AMEX' }
              ]}
              placeholder="Choose Limit"
            />
          </div>
        </div>
      </div>
      <div className="form__DiscountRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Discount Group</span>
          <div className="form__form-group-field">
            <Field
              name="discountGroup"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Disable', label: 'Disable' },
                { value: 'Default', label: 'Default' },
                { value: 'DISCOUNT_GRP_HDFC', label: 'DISCOUNT_GRP_HDFC' },
                { value: 'DISCOUNT_GRP_AMEX', label: 'DISCOUNT_GRP_AMEX' }
              ]}
              placeholder="Choose Group"
            />
          </div>
        </div>
      </div>
      <div className="form__DiscountRow1">
        <div className="form__form-group">
          <span className="form__form-group-label">Cash Back Group</span>
          <div className="form__form-group-field">
            <Field
              name="cashBackGroup"
              component={renderSelectField}
              type="text"
              options={[
                { value: 'Disable', label: 'Disable' },
                { value: 'Default', label: 'Default' },
                { value: 'CASHBACK_GRP_HDFC', label: 'CASHBACK_GRP_HDFC' },
                { value: 'CASHBACK_GRP_AMEX', label: 'CASHBACK_GRP_AMEX' }
              ]}
              placeholder="Choose Group"
            />
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
