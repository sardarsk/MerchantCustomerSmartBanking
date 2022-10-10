import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import OnboardingConfig from './OnboardingConfig';
import TransactionsConfig from './TransactionsConfig';
import TransactionsMapViewConfig from './TransactionsMapViewConfig';
import GoogleMapViewConfig from './GoogleMapViewConfig';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/dashboard/onboarding" component={OnboardingConfig} />
      <Route path="/dashboard/transactions" component={TransactionsConfig} />
      <Route path="/dashboard/transactionsMapView" component={TransactionsMapViewConfig} />
      <Route path="/dashboard/googlemapview" component={GoogleMapViewConfig} />
      
    </div>
  </div>
);
