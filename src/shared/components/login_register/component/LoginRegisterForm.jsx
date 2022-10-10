import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AlternateEmailIcon from 'mdi-react/AlternateEmailIcon';
import { Button, Alert, CardBody } from 'reactstrap';
import renderSelectField from '../../../../shared/components/form/Select';
import { Card } from '@material-ui/core';

import POAFileUpload from '../../../../containers/CMS/Onboarding/General/GeneralMenu/CardHolder/Cards&Customers/Customers/Register/components/CMSKYC/POAFileUpload'
import showResults from './Show';
import { useTranslation } from 'react-i18next';
import validate from './validate';
import CmsService from '../../../../utils/api/CMS/CmsService';
import renderDropZoneField from '@/shared/components/form/DropZone';
import {
  Col, ButtonToolbar,
} from 'reactstrap';

const axios = require('axios');
const required = value => value ? undefined : 'Required'
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
//const LoginRegisterForm = ({  data,form }) => {


const LoginRegisterForm = props => {
  const { handleSubmit, data, pristine, reset, submitting, countryCodeData ,uploadFileHandler} = props;
  // const LoginRegisterForm = ({handleSubmit, data,changeIsOpenModalFireBase }) => {
  // window.alert("Customer added successfuly!!" + `${JSON.stringify(form)}`);
  const renderField = ({ input, label, placeholder, type, meta: { touched, error, warning } }) => (
    <div>
      <div>
        <input {...input} placeholder={placeholder} type={type} />
        {touched && ((error && <span className="form__form-group-error"> {label} {error}</span>) || (warning && <span>{warning}</span>))}
      </div>
    </div>

  )
  let institution = [];
  if (data && data != null && data.mapData) {
    data.mapData.map(item => {
      institution.push({ "label": item.instName + "(" + item.instDescription + ")", "value": item.instId });
    })
  }

  let countryCode = [];
  if (countryCodeData && countryCodeData != null && countryCodeData.mapData) {
    countryCodeData.mapData.map(item => {
      var countryName = item.description.split(':')
      countryCode.push({ "label": item.mobileCountryCode + "(" + countryName[0] + ")", "value": item.mobileCountryCode });
    })
  }

  const [showPassword, setShowPassword, control] = useState(false);
  const { t } = useTranslation('common');


  const toggleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const [file, setFiles] = useState();
  const [imagePreview, setImagesPreview] = useState([]);

  return (

    <Card>
      <CardBody>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__form-group">

            <span className="form__form-group-label">Select Bank</span>
            <div className="form__form-group-field">
              <Field
                validate={required}
                name="institutionBank"
                component={renderSelectField}
                type="text"
                options={institution}
                label="Select Bank "
                placeholder="Select Bank"
              />
            </div>
          </div>

          <div className="form_cms">
            {/* <div className="form__form-group"> */}
            <span className="form__form-group-label">FirstName</span>
            <div className="form__form-group-field">

              <Field
                validate={required}
                component={renderField}
                name="firstName"
                type="text"
                label="FirstName"
                placeholder="firstName"
                className="input-without-border-radius"
              />
              <div className="form__form-group-icon">
              </div>
            </div>
          </div>
          <div className="form_cms">
            <span className="form__form-group-label">LastName</span>
            <div className="form__form-group-field">
              <Field
                validate={required}
                component={renderField}
                name="lastName"
                type="text"
                label="LastName"
                placeholder="LastName"
                className="input-without-border-radius"
              />
              <div className="form__form-group-icon">
              </div>
            </div>
          </div>
          <div className="form_cms">
            <span className="form__form-group-label">Select CountryCode</span>
            <div className="form__form-group-field">
              <Field
                validate={required}
                name="countryCode"
                component={renderSelectField}
                type="text"
                options={countryCode}
                label="Select CountryCode "
                placeholder="Select CountryCode"
              />
            </div>
          </div>
          <div className="form_cms">
            <span className="form__form-group-label">MobileNumber</span>
            <div className="form__form-group-field">
              <Field
                validate={required}
                component={renderField}
                name="mobileNumber"
                type="text"
                label="MobileNumber"
                placeholder="Mobile"
                className="input-without-border-radius"
              />
            </div>
          </div>


          <div className="form__form-group">
            <span className="form__form-group-label">E-mail</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <AlternateEmailIcon />
              </div>
              <Field
                validate={required}
                component={renderField}
                // component="input"
                name="email"
                type="email"
                label="Email"
                placeholder="example@mail.com"
                className="input-without-border-radius"
              />
            </div>
          </div>
          <div className="form_cms">
            <span className="form__form-group-label">UserName</span>
            <div className="form__form-group-field">
              <Field
                validate={[required]}
                // onChange={handleKeyPress}
                component={renderField}
                // onChange={(e) => handleKeyPress(e.target.value)}
                name="userName"
                type="text"
                // onChange={event => {
                //   onChangeAcquirer(event)
                // }
                // }
                //onFocusCapture={handleKeyPress}
                //  onfocusout={handleKeyPress}
                // onKeyPress={(e) => handleKeyPress(e)}
                // onfocusout="myFunction()"
                label="UserName"
                placeholder="userName"
                className="input-without-border-radius"
              />
            </div>
          </div>
          <div className="form__form-group form__form-group--forgot">
            <span className="form__form-group-label">Password</span>
            <div className="form__form-group-field">
              <div className="form__form-group-icon">
                <KeyVariantIcon />
              </div>
              <Field
                validate={required}
                component={renderField}
                name="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                label="Password"
                className="input-without-border-radius"
              />
              <button
                type="button"
                className={`form__form-group-button${showPassword ? ' active' : ''}`}
                onClick={toggleShowPassword}
              ><EyeIcon />
              </button>
            </div>
          </div>
          {/* <div className="App">
            <h5 className="bold-text">{t('uploadKycFiles.cardKyc')}</h5>
            <div className="form__POIUpload">
              <div className="form__form-group">
                <div className="form__form-group-field">
                  <input name="poaFront" type="file" multiple accept="image/*" onChange={handleChange} component={renderDropZoneField} />
                </div>
              </div>
            </div>
            <div>
            {imagePreview.map((imagesrc => 
              <img src={imagesrc} />
            )
            )} */}

          {/* <POAFileUpload handleSubmit={handleSubmit} onSubmit={showResults} /> */}

          <Col md={12} lg={6}>
            <Card>
              <CardBody>
                <div >

                  <h5 className="bold-text">{t('uploadKycFiles.cardKyc')}</h5>
                </div>
                <form className="form" >
                  <div className="form__POIUpload">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Field name="poaFront" type="file"  component={renderDropZoneField} onChange={uploadFileHandler}/>
                      </div>
                    </div>
                  </div>
                  <div className="form__POIUpload">
                    <div className="form__form-group">
                      <div className="form__form-group-field">
                        <Field name="poaBack" type="file" component={renderDropZoneField} onChange={uploadFileHandler}/>
                      </div>
                    </div>
                  </div>
                  
                  {/* <input type="file" className="form-control" name="file" multiple onChange={this.onFileChangeHandler}/> */}

                  {/* <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Upload</Button>
              <Button type="reset" onClick={reset}>Clear</Button>
            </ButtonToolbar>
          </div> */}
                </form>
              </CardBody>
            </Card>
          </Col>
          <div className="account__btns register__btns">
            <Button type="submit" color="primary" className="account__btn" handleSubmit={handleSubmit}  >
              Sign Up
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
    
  );
};


LoginRegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};


export default reduxForm({
  form: 'register_form', // a unique identifier for this form
  validate
})(LoginRegisterForm);
