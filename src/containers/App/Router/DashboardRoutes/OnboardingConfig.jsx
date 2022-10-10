import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OnboardingDashboard from '../../../../containers/Dashboards/Onboarding/index';

export default () => (
  <Switch>
    <Route path="/dashboard/onboarding" component={OnboardingDashboard} />
    <Route path="/dashboard/onboarding/institution_type_modify" component={OnboardingDashboard} />
  </Switch>
);
