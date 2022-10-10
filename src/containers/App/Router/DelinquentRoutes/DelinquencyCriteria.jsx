import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Config from './Config';
import Details from './Details';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/creditCollection/config" component={Config} />
      <Route path="/creditCollection/details" component={Details} />
    </div>
  </div>
);
