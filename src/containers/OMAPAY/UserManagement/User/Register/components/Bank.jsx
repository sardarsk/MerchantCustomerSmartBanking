import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import renderSelectField from '@/shared/components/form/Select';
import MaskedInput from 'react-text-mask';
import CreditCardIcon from 'mdi-react/CreditCardIcon';
import renderRadioButtonField from '@/shared/components/form/RadioButton';

const MasterCard = `${process.env.PUBLIC_URL}/img/for_store/cards/mc.svg`;
const VisaCard = `${process.env.PUBLIC_URL}/img/for_store/cards/visa.svg`;
const PayPal = `${process.env.PUBLIC_URL}/img/for_store/cards/paypal.svg`;

const renderField = ({
  input, placeholder, type, mask,
}) => (
  <MaskedInput {...input} placeholder={placeholder} type={type} mask={mask} />
);

renderField.propTypes = {
  input: PropTypes.shape().isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.arrayOf(PropTypes.any),
};

renderField.defaultProps = {
  placeholder: '',
  type: 'text',
  mask: [],
};


const WizardFormOne = ({ handleSubmit, previousPage }) => {

  const [showCardPayment, setCardPayment] = React.useState(false)
  const [showAccountPayment, setAccountPayment] = React.useState(false)
  const [showNEFTPayment, setNEFTPayment] = React.useState(false)

  const onClickCard = () => {
    //window.alert('Inside card '+showCardPayment);
    setAccountPayment(false);
    setNEFTPayment(false);
    if(!showCardPayment)
      setCardPayment(true);
    else
      setCardPayment(false);
  }
  const onClickAccount = () => {
    setCardPayment(false);
    setNEFTPayment(false);
    if(!showCardPayment)
      setAccountPayment(true);
    else
      setAccountPayment(false);
  }
  const onClickNEFT = () => {
    setCardPayment(false);
    setAccountPayment(false);
    if(!showCardPayment)
      setNEFTPayment(true);
    else
      setNEFTPayment(false);
  }

  return (
    <Card>
    <CardBody>
    <h3 className="wizard__title">Choose Payment Collection Option From Merchant </h3>

    <form className="form" onSubmit={handleSubmit}>
    <div className="form__form-group">
      <span className="form__form-group-label">Choose payment method:</span>
      <div className="form__form-group-field">
        <div className="payment__credit-card">
          <Field
            name="card"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={MasterCard} alt="mc" /><p className="payment__credit-name">MasterCard</p></div>}
            radioValue="card"
            onChange={onClickCard}
            defaultChecked
          />
        </div>
        <div className="payment__credit-card">
          <Field
            name="card"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={VisaCard} alt="visa" /><p className="payment__credit-name">Visa</p></div>}
            radioValue="dhl"
            onChange={onClickAccount}
          />
        </div>
        <div className="payment__credit-card">
          <Field
            name="card"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={PayPal} alt="paypal" /><p className="payment__credit-name">PayPal</p></div>}
            radioValue="mail_priority"
            onChange={onClickNEFT}
          />
        </div>
      </div>
    </div>

    {/* Card Payment */ }
    { showCardPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Card number</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="card_number"
          component={renderField}
          type="text"
          mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder="xxxx-xxxx-xxxx-xxxx"
        />
      </div>
    </div>
    }
    
    { showCardPayment && 
    <div className="form__form-group-date-cvc">
      <div className="form__form-group form__form-group-date">
        <span className="form__form-group-label">Expiration Date</span>
        <div className="form__form-group-field">
          <Field
            name="date"
            component={renderField}
            type="text"
            mask={[/[0-3]/, /\d/, '/', /[0-1]/, /\d/, '/', /\d/, /\d/]}
            placeholder="DD/MM/YY"
          />
        </div>
      </div>
      <div className="form__form-group form__form-group-cvc">
        <span className="form__form-group-label">CVC</span>
        <div className="form__form-group-field">
          <Field
            name="cvc"
            component={renderField}
            type="text"
            mask={[/\d/, /\d/, /\d/]}
          />
        </div>
      </div>
    </div>
    }
    { showCardPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Cardholder name</span>
      <div className="form__form-group-field">
        <Field
          name="name"
          component="input"
          type="text"
          placeholder="Name and Surname"
        />
      </div>
    </div>
    }

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
