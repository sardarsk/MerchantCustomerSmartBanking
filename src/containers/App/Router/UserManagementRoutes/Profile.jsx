import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddProfile from '../../../MPS/UserManagement/Profile/Register/index';
import ProfileModify from '../../../MPS/UserManagement/Profile/Modify/index';
import ProfileView from '../../../MPS/UserManagement/Profile/View/index';

export default () => (
  <Switch>
      <Route path="/user_management/profile/add" component={AddProfile} />
      <Route path="/user_management/profile/modify" component={ProfileModify} />
      <Route path="/user_management/profile/view" component={ProfileView} />
  </Switch>
);
