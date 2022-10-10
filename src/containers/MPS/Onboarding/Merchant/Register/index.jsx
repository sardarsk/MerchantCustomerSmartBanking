import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import showResults from './Show';
import MerchanantOnboardForm from './components/MerchangtOnboardForm';
import { putMerchantData } from '../../../../../redux/actions/merchantActions';
import api from '../../../../../utils/api/onboarding/apiClient';
const axios = require('axios');

const MerchanantOnboard = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {
    //window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    const response = await api.merchant.put(formValues);
    window.alert("Successfull Merchant Registration: "+`${JSON.stringify(response, null, 2)}`);

    if(response.status === 200){
      window.alert("Successfull.. Registration Number: "+`${response.data.registrationNumber}`);
      setIsRedirect(true);
    }
    else
      window.alert("Failed for Merchant Registration: "+`${JSON.stringify(response, null, 2)}`);

  };

  if (isRedirect) {
    return <Redirect to="/onboarding/merchant/register" />;
  }

  return (
    <Container>
      <MerchanantOnboardForm onSubmit={handleSubmit} />
    </Container>
  );
};


export default MerchanantOnboard;