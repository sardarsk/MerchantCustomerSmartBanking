import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TransactionSearch from '../../../MPS/Transactions/Filter/index';

export default () => (
  <Switch>
      <Route path="/filter/transaction/search" component={TransactionSearch} />
  </Switch>
);
