import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ViewCustomerDetails from '../../../DELINQUENT/Config/View/CustomerDetailsView';
import ViewDelinquencyAccount from '../../../DELINQUENT/Config/View/DelinquencyAccount';

export default () => (
  <Switch>
      <Route path="/creditCollection/details/view/CustomerDetailsView" component={ViewCustomerDetails} />
      <Route path="/creditCollection/details/view/DelinquencyAccount" component={ViewDelinquencyAccount} />
  </Switch>
);
