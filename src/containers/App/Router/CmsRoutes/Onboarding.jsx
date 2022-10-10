import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ModuleList from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Modules/View/index';
import AddModule from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Modules/Register/index';
import EditModule from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Modules/Modify/index';
import FunctionGroupList from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/FunctionGroups/View/index';
import AddFunctionGroup from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/FunctionGroups/Register/index';
import EditFunctionGroup from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/FunctionGroups/Modify/index';
import FunctionsList from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Functions/View/index';
import AddFunctions from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Functions/Register/index';
import EditFunctions from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/MenuParameters/Functions/Modify/index';
import Reports from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/Reports/Generate/index';
import AddUserRole from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserRoles/Register/index';
import EditUserRole from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserRoles/Modify/index';
import ListUserRole from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserRoles/View/index';
import AddUserAccount from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserAccounts/Register/index';
import EditUserAccount from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserAccounts/Modify/index';
import ListUserAccount from '../../../CMS/Onboarding/General/GeneralMenu/UserAdministration/UserAccounts/View/index';
import AddCustomer from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards&Customers/Customers/Register/index';

import AddNewCustomer from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards&Customers/Customers/Register/components/AddNewCustomer';
import CardBlockUnblock from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards/CardBlockUnblock';

import CardGenerationForm from '../../../CMS/Onboarding/General/GeneralMenu/CardGeneration';
import AccountGenerationForm from '../../../CMS/Onboarding/General/GeneralMenu/AccountGeneration';


export default () => (
  <Switch>
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/modules/view" component={ModuleList} />
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/modules/register" component={AddModule} /> 
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/modules/modify" component={EditModule} />    
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/view" component={FunctionGroupList} />  
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/register" component={AddFunctionGroup} /> 
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/modify" component={EditFunctionGroup} />    
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functions/view" component={FunctionsList} />
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functions/register" component={AddFunctions} /> 
        <Route path="/cms/general/generalMenu/userAdministration/menuParameters/functions/modify" component={EditFunctions} /> 
        <Route path="/cms/general/generalMenu/userAdministration/reports/generate" component={Reports} />
        <Route path="/cms/general/generalMenu/userAdministration/userRoles/register" component={AddUserRole} />
        <Route path="/cms/general/generalMenu/userAdministration/userRoles/modify" component={EditUserRole} />
        <Route path="/cms/general/generalMenu/userAdministration/userRoles/view" component={ListUserRole} />
        <Route path="/cms/general/generalMenu/userAdministration/userAccounts/register" component={AddUserAccount} />
        <Route path="/cms/general/generalMenu/userAdministration/userAccounts/modify" component={EditUserAccount} />
        <Route path="/cms/general/generalMenu/userAdministration/userAccounts/view" component={ListUserAccount} />
        <Route path="/cms/general/generalMenu/cardHolder/cards&Customers/customers/register" component={AddCustomer} />

        <Route path="/cms/general/generalMenu/CardGeneration/CustomerCardGeneration" component={CardGenerationForm} />
        <Route path="/cms/general/generalMenu/AccountGeneration/CustomerAccountGeneration" component={AccountGenerationForm} />
        </Switch>
);
