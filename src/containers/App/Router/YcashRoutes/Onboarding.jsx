import React from 'react';
import { Route, Switch } from 'react-router-dom';
import KioskFunctions from '../../../YCASH/Onboarding/Kiosk/Functions/index';

export default () => (
  <Switch>
        <Route path="/ycash/kiosk/functions" component={KioskFunctions} />       
     {/*   <Route path="/ycash/kiosk/view" component={KioskFunctions} />*/}
  </Switch>
);
