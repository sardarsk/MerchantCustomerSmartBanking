import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MerchanantOnboard from '../../../MPS/Onboarding/Merchant/Register/index';

export default () => (
  <Switch>
        <Route path="/onboarding/merchant/register" component={MerchanantOnboard} />
        <Route path="/onboarding/merchant/modify" component={MerchanantOnboard} />
        <Route path="/onboarding/merchant/view" component={MerchanantOnboard} />
  </Switch>
);
