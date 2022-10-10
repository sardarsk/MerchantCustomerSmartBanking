import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import TransactionSearch from './TransactionSearch';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/filter/transaction" component={TransactionSearch} />

    </div>
  </div>
);
