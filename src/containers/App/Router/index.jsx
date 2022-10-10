import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from '../MainWrapper';
import Landing from '../../Landing/index';
import NotFound404 from '../../DefaultPage/404/index';
import LockScreen from '../../Account/LockScreen/index';
import LogIn from '../../Account/LogIn/index';
import LogInPhoto from '../../Account/LogInPhoto/index';
import Register from '../../Account/Register/index';
import OnBoardNewCardCustomer from '../../CMS/Onboarding/General/GeneralMenu/Register';
import RegisterPhoto from '../../Account/RegisterPhoto/index';
import ResetPassword from '../../Account/ResetPassword/index';
import ResetPasswordPhoto from '../../Account/ResetPasswordPhoto';
import WrappedRoutes from './WrappedRoutes';
import ConfigRoutes from './ConfigRoutes';
import DashboardRoutes from './DashboardRoutes';
import FiltersRoutes from './FiltersRoutes';
import OnboardingRoutes from './OnboardingRoutes';
import UserManagementRoutes from './UserManagementRoutes';
import creditCollectionRoutes from './DelinquentRoutes/DelinquencyCriteria';
import SoftPOSRoutes from './SoftPosRoutes';
import OmaPayRoutes from './OmaPayRoutes';
import YcashRoutes from './YcashRoutes';
import CmsRoutes from './CmsRoutes';
import ProtectedRoute from './ProtectedRoute';

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/landing" component={Landing} />
        <Route path="/404" component={NotFound404} />
        <Route path="/lock_screen" component={LockScreen} />
        <Route path="/log_in" component={LogIn} />
        <Route path="/log_in_photo" component={LogInPhoto} />
        <Route path="/register" component={Register} />
        <Route path="/OnBoardNewCardCustomer" component={OnBoardNewCardCustomer} />
        <Route path="/register_photo" component={RegisterPhoto} />
        <Route path="/reset_password" component={ResetPassword} />
        <Route path="/reset_password_photo" component={ResetPasswordPhoto} />
        <Route path="/config" component={ConfigRoutes} />
        <Route path="/filter" component={FiltersRoutes} />
        <Route path="/dashboard" component={DashboardRoutes} />
        <Route path="/onboarding" component={OnboardingRoutes} />
        <Route path="/user_management" component={UserManagementRoutes} />
        <Route path="/creditCollection" component={creditCollectionRoutes} />
        {/* <Route path="/softpos" component={SoftPOSRoutes}/> */}
        <ProtectedRoute exact   component={SoftPOSRoutes}/>
        <Route path="/omapay" component={OmaPayRoutes}/>
        <Route path="/ycash" component={YcashRoutes}/>
        <Route path="/cms" component={CmsRoutes}/>
        <Route path="/" component={WrappedRoutes} />

      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
