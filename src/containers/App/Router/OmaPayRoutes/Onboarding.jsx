import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PaymentProcessorView from '../../../OMAPAY/Onboarding/Payment/View/index';
import PaymentProcessorModify from '../../../OMAPAY/Onboarding/Payment/Modify/index';
import PaymentProcessorReportView from '../../../OMAPAY/Onboarding/Payment/PaymentProcessor/Reports/View/index';
import PaymentProcessorResponseConversions from '../../../OMAPAY/Onboarding/Payment/PaymentProcessor/ResponseConvsersions/Modify/index';

export default () => (
  <Switch>
        {/*<Route path="/softpos/merchant/register" component={MerchanantOnboard} />*/}
        <Route path="/omapay/payment/modify" component={PaymentProcessorModify} />
        <Route path="/omapay/payment/view" component={PaymentProcessorView} />
        <Route path="/omapay/payment/paymentProcessor/reports/view" component={PaymentProcessorReportView} />
        <Route path="/omapay/payment/paymentProcessor/responsecon/modify" component={PaymentProcessorResponseConversions} />
  </Switch>
);
