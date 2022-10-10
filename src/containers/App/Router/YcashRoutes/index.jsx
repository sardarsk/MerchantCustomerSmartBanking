import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import UIConfiApp from './Onboarding';


export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/ycash/kiosk" component={UIConfiApp} />
    
    </div>
  </div>
);
