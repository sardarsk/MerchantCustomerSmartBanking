import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import SoftposOnboarding from './Onboarding';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/softpos/merchant" component={SoftposOnboarding} />
    
    </div>
  </div>
);
