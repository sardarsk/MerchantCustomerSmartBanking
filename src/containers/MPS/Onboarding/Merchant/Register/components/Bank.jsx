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
const Account = `${process.env.PUBLIC_URL}/img/for_store/cards/account.svg`;

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
    if(!showAccountPayment)
      setAccountPayment(true);
    else
      setAccountPayment(false);
  }
  const onClickNEFT = () => {
    setCardPayment(false);
    setAccountPayment(false);
    if(!showNEFTPayment)
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
        {/*
        <div className="payment__credit-card">
          <Field
            name="paymentMode"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={MasterCard} alt="mc" /><p className="payment__credit-name">Card</p></div>}
            radioValue="card"
            onChange={onClickCard}
            defaultChecked
          />
        </div>
        */}
        <div className="payment__credit-card">
          <Field
            name="paymentMode"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={Account} alt="acct" /><p className="payment__credit-name">Account</p></div>}
            radioValue="account"
            onChange={onClickAccount}
          />
        </div>
        {/*
        <div className="payment__credit-card">
          <Field
            name="paymentMode"
            component={renderRadioButtonField}
            // eslint-disable-next-line
            label={<div><img className="payment__credit-card_img" src={PayPal} alt="paypal" /><p className="payment__credit-name">PayPal</p></div>}
            radioValue="paypal"
            onChange={onClickNEFT}
          />
        </div>
        */}
      </div>
    </div>

    {/* Card Payment */ }
    { /*showCardPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Card number</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="cardNumber"
          component={renderField}
          type="text"
          mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder="xxxx-xxxx-xxxx-xxxx"
        />
      </div>
    </div>*/
    }
    
    {/* showCardPayment && 
    <div className="form__form-group-date-cvc">
      <div className="form__form-group form__form-group-date">
        <span className="form__form-group-label">Expiration Date</span>
        <div className="form__form-group-field">
          <Field
            name="expiryDate"
            component={renderField}
            type="text"
            mask={[/[0-1]/, /\d/, '/', /\d/, /\d/]}
            placeholder="MM/YY"
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
    */
    }

    { /*showCardPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Cardholder name</span>
      <div className="form__form-group-field">
        <Field
          name="nameOncard"
          component="input"
          type="text"
          placeholder="Name On Card"
        />
      </div>
    </div>*/
    }

    {/* Account Payment */ }
    { showAccountPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Account number</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="accountNumber"
          component={renderField}
          type="text"
          mask={[/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholder="xxxx-xxxx-xxxx"
        />
      </div>
    </div>
    }
    
    { showAccountPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">IBAN Number</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="ifsc"
          component="input"
          type="text"
          placeholder="IBAN Code"
        />
      </div>
    </div>
    }

    { showAccountPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">SWIFT Code</span>
      <div className="form__form-group-field">
        <div className="form__form-group-icon">
          <CreditCardIcon />
        </div>
        <Field
          name="swift"
          component="input"
          type="text"
          placeholder="SWIFT Code"
        />
      </div>
    </div>
    }

    { showAccountPayment && 
    <div className="form__form-group">
      <span className="form__form-group-label">Customer Account Name</span>
      <div className="form__form-group-field">
        <Field
          name="accountName"
          component="input"
          type="text"
          placeholder="Account Name"
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
