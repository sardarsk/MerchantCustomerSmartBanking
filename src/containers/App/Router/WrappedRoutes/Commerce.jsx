import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardAndTransactionsDashboard from '../../../Dashboards/CardAndTransactions/index';
import CardAndTransactionsDashboardEdit from '../../../Dashboards/CardAndTransactionsTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/card_transactions_dashboard" component={CardAndTransactionsDashboard} />
    <Route path="/card_transactions_dashboard/edit/:index" component={CardAndTransactionsDashboardEdit} />
  </Switch>
);
