import React from 'react';
import { Route, Switch } from 'react-router-dom';
import VectorMapWithRequestData from '../../../Dashboards/VectorMapWithRequestData/index';

export default () => (
  <Switch>
    <Route path="/dashboard/transactionsmapview" component={VectorMapWithRequestData} />
    <Route path="/dashboard/transactionsmapview/x" component={VectorMapWithRequestData} />
  </Switch>
);
