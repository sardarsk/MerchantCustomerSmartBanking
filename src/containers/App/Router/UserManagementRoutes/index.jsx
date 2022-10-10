import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../../../Layout/index';
import Profile from './Profile';
import User from './User';

export default () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/user_management/user" component={User} />
      <Route path="/user_management/profile" component={Profile} />
    </div>
  </div>
);
