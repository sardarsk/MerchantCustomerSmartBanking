import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Onboarding from './Onboarding';
import ATM from './ATM';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/onboarding/merchant" component={Onboarding} />
      <Route path="/onboarding/ATM" component={Onboarding} />
    </div>
  </div>
);
