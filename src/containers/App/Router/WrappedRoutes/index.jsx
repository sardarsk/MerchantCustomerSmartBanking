import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Commerce from './Commerce';
import Finance from './Finance';
import AppDashboard from '../../../Dashboards/App/index';
import Forms from './Forms';
import Tables from './Tables';
import Account from './Account';
import ECommerce from './ECommerce';
import DefaultPages from './DefaultPages';
import Documentation from './Documentation';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/card_transactions_dashboard" component={Commerce} />
      <Route exact path="/app_dashboard" component={AppDashboard} />
      <Route path="/finance_dashboard" component={Finance} />
      <Route path="/forms" component={Forms} />
      <Route path="/tables" component={Tables} />
      <Route path="/account" component={Account} />
      <Route path="/e-commerce" component={ECommerce} />
      <Route path="/default_pages" component={DefaultPages} />
      <Route path="/documentation" component={Documentation} />

    </div>
  </div>
);
