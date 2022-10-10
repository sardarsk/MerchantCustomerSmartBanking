import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TransactionsDashboard from '../../../Dashboards/Transactions/index';

export default () => (
  <Switch>
    <Route path="/dashboard/transactions" component={TransactionsDashboard} />
    <Route path="/dashboard/transactions/x" component={TransactionsDashboard} />
  </Switch>
);
