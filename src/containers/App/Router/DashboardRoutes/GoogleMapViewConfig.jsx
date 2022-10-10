import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GoogleMap from '../../../Dashboards/GoogleMap/index';

export default () => (
  <Switch>
    <Route path="/dashboard/googlemapview" component={GoogleMap} />
    <Route path="/dashboard/googlemapview/x" component={GoogleMap} />
  </Switch>
);
