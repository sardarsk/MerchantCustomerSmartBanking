import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import GeneralConfig from './GeneralConfig';
import AppConfig from './AppConfig';
import MerchantConfig from './MerchantConfig';
import NetworkConfig from './NetworkConfig';
import ValidationConfig from './ValidationConfig';
import SecurityConfig from './SecurityConfig';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/config/general_config" component={GeneralConfig} />
      <Route path="/config/app_config" component={AppConfig} />
      <Route path="/config/merchant_config" component={MerchantConfig} />
      <Route path="/config/network_config" component={NetworkConfig} />
      <Route path="/config/validation_config" component={ValidationConfig} />
      <Route path="/config/security_config" component={SecurityConfig} />

    </div>
  </div>
);
