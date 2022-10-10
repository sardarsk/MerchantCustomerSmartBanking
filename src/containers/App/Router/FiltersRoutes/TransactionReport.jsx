import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Profile from '../../../Account/Profile/index';
import Download from '../../../MPS/Transactions/Download/index';

export default () => (
  <Switch>
        <Route path="/filter/transaction/search" component={Download} />
  </Switch>
);
