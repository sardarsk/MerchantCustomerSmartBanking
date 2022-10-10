import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MerchantRegister from '../../../MPS/Onboarding/Merchant/Register/index';
import MerchantModify from '../../../MPS/Onboarding/Merchant/Modify/index';
import MerchantView from '../../../MPS/Onboarding/Merchant/View/index';

export default () => (
  <Switch>
        <Route path="/user_management/user/user_view" component={MerchantRegister} />
        <Route path="/user_management/user/register" component={MerchantModify} />
        <Route path="/user_management/user/approve" component={MerchantView} />
        <Route path="/user_management/user/modify" component={MerchantRegister} />
        <Route path="/user_management/user/reset_password" component={MerchantModify} />
        <Route path="/user_management/user/verify_Email" component={MerchantView} />
        <Route path="/user_management/user/verify_Mobile" component={MerchantView} />
  </Switch>
);
