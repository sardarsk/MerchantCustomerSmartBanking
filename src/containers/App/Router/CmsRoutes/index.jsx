import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import CardsRoute from './CardsRoute';
import UIConfiApp from './Onboarding';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/cms/general/generalMenu" component={UIConfiApp} />
      <Route path="/cms/generalMenu" component={CardsRoute} />
    </div>
  </div>
);
