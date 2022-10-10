import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import PayementSolution from './Onboarding';



export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
     <Route path="/omapay/payment/view" component={PayementSolution} />
     <Route path="/omapay/payment/modify" component={PayementSolution} />
     <Route path="/omapay/payment/paymentProcessor/reports/view" component={PayementSolution} />
     <Route path="/omapay/payment/paymentProcessor/responsecon/modify" component={PayementSolution} />
    </div>
  </div>
);
