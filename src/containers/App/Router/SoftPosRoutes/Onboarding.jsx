import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ThemeSliderConfigRegistration from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/ThemeSliderConfig/Register/index'
import ThemeSliderConfigView from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/ThemeSliderConfig/View/index'


import OtherConfiguration from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/OtherConfig/Register/index';
import OtherUiConfigView from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/OtherConfig/View/index';
import OtherUiConfigModify from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/OtherConfig/Modify/index';


import ParamConfigRegistration  from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Register/index';
import ParamConfigView from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/View/index';
import ParamConfigEntryPointModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/EntryPoint/index';
import ParamConfigAppListModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/AppList/index';
import ParamConfigRdolModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/Rdol/index';
import ParamConfigCapKModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/CapK/index';
import ParamConfigRevocationModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/Revocation/index';
import ParamConfigKernelModify from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Modify/Kernel/index';

import ParamConfigAppListUpdate from '../../../SOFTPOS/SoftPosOnboarding/ParamConfig/Update/AppList/index';


import TerminalOnBoarding from '../../../SOFTPOS/SoftPosOnboarding/TerminalOnboarding/Register/index';
import TerminalOnBoardingModify from '../../../SOFTPOS/SoftPosOnboarding/TerminalOnboarding/Modify/index';
import TerminalOnBoardingView from '../../../SOFTPOS/SoftPosOnboarding/TerminalOnboarding/View/index';



import AcquirerOnboardRegister from '../../../SOFTPOS/SoftPosOnboarding/AcquirerOnboard/Register/index';
import AcquirerOnBoardEdit from '../../../SOFTPOS/SoftPosOnboarding/AcquirerOnboard/Modify/index';
import AcquirerOnboardView from '../../../SOFTPOS/SoftPosOnboarding/AcquirerOnboard/View/index';


import AcquirerKeyConfigRegister from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Register/acquirerKey/index';
import SecurityKeyConfigRegister from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Register/securityKey/index';
import SecurityKeyTypeConfigRegister from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Register/securityKeyType/index';

import KeyConfigacquirerKeyModifiy from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Modify/acquirerKey/index';
import KeyConfigSecurityKeyModifiy from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Modify/securityKey/index';
import KeyConfigSecurityKeyTypeModifiy from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/Modify/securityKeyType/index';

import AcquirerKeyConfigView from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/View/acquirerKey/index';
import SecurityKeyTypeConfigView from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/View/securityKeyType/index';
import SecurityKeyConfigView from '../../../SOFTPOS/SoftPosOnboarding/KeyConfig/View/securityKey/index';

import MerchantDetailsMofify from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/Modify/merDetails/index';
import MerchantReceiptDetailsMofify from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/Modify/merReceiptDetails/index';
import MerchantOnboardingRegistration from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/Register/MerchantRegistration/index';
import MerchantReceiptRegistration from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/Register/MerchantReceiptConfig/index';
import MerchantReceiptDetailsView from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/View/MerReceipt/index';
import MerchantDetailsView from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/View/merchantOnboarding/index';

import ShchemeRegistration from '../../../SOFTPOS/SoftPosOnboarding/Masters/Schemes/Register/index';
import ShchemeModify from '../../../SOFTPOS/SoftPosOnboarding/Masters/Schemes/Modify/index';
import ShchemeView from '../../../SOFTPOS/SoftPosOnboarding/Masters/Schemes/View/index';

import MccRegistration from '../../../SOFTPOS/SoftPosOnboarding/Masters/Mcc/Register/index';
import MccModify from '../../.../../../SOFTPOS/SoftPosOnboarding/Masters/Mcc/Modify/index';
import MccView from '../../../SOFTPOS/SoftPosOnboarding/Masters/Mcc/View/index';
import AcquirerOnboardUpdate from '../../../SOFTPOS/SoftPosOnboarding/AcquirerOnboard/Update';
import OtherUiConfigUpdate from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/OtherConfig/Update';
import ThemeSliderConfigUpdate from '../../../SOFTPOS/SoftPosOnboarding/Uiconfig/ThemeSliderConfig/Update';
import MerchantDetailsUpdate from '../../../SOFTPOS/SoftPosOnboarding/MerchantOnboarding/Update/merDetails/index'

export default () => (
  <Switch>
        <Route path="/softpos/merchant/uiconfigurationtheme/register" component={ThemeSliderConfigRegistration} />
        <Route path="/softpos/merchant/uiconfigurationtheme/view" component={ThemeSliderConfigView} />
        <Route path="/softpos/merchant/uiconfigurationtheme/update/:id" component={ThemeSliderConfigUpdate} />
{/* Other Config*/}
        <Route path="/softpos/merchant/uiconfigurationOther/register" component={OtherConfiguration} />
        <Route path="/softpos/merchant/uiconfigurationOther/view" component={OtherUiConfigView} />

        <Route path="/softpos/merchant/uiconfigurationOther/modify" component={OtherUiConfigModify} />
        <Route path="/softpos/merchant/uiconfigurationOther/update/:id/:id1/:id2" component={OtherUiConfigUpdate} />
        
        {
          /****Param Config**** */
        }
        <Route path="/softpos/merchant/paramconf/registration" component={ParamConfigRegistration}/>
        <Route path="/softpos/merchant/paramconf/view" component={ParamConfigView}/>
        <Route path="/softpos/merchant/paramconf/entrypoint/modify" component={ParamConfigEntryPointModify}/>
        <Route path="/softpos/merchant/paramconf/applist/modify" component={ParamConfigAppListModify}/>
        <Route path="/softpos/merchant/paramconf/applist/update/:id" component={ParamConfigAppListUpdate}/>
        <Route path="/softpos/merchant/paramconf/rdol/modify" component={ParamConfigRdolModify}/>
        <Route path="/softpos/merchant/paramconf/capk/modify" component={ParamConfigCapKModify}/>
        <Route path="/softpos/merchant/paramconf/revocation/modify" component={ParamConfigRevocationModify}/>
        <Route path="/softpos/merchant/paramconf/kernel/modify" component={ParamConfigKernelModify}/>

        <Route path="/softpos/merchant/terminalonboarding/registration" component={TerminalOnBoarding}/>
        <Route path="/softpos/merchant/terminalonboarding/view" component={TerminalOnBoardingView}/>
        <Route path="/softpos/merchant/terminalonboarding/modify" component={TerminalOnBoardingModify}/>
{/* Merchant Menu*/}
        <Route path="/softpos/merchant/merchant/merReg/register" component={MerchantOnboardingRegistration}/>
        <Route path="/softpos/merchant/merchant/merReceiptReg/register" component={MerchantReceiptRegistration}/>
        <Route path="/softpos/merchant/merchant/merDetails/modify" component={MerchantDetailsMofify}/>
        <Route path="/softpos/merchant/merchant/merDetails/update/id:/:id1" component={MerchantDetailsUpdate}/>
        <Route path="/softpos/merchant/merchant/merReciept/modify" component={MerchantReceiptDetailsMofify}/>
        <Route path="/softpos/merchant/merchant/merDetails/view" component={MerchantDetailsView}/>
        <Route path="/softpos/merchant/merchant/merReciept/view" component={MerchantReceiptDetailsView}/>

        <Route path="/softpos/merchant/institution/modify" component={AcquirerOnBoardEdit}/>
        <Route path="/softpos/merchant/institution/register" component={AcquirerOnboardRegister}/>
        <Route path="/softpos/merchant/institution/update/:id" component={AcquirerOnboardUpdate}/>
        <Route path="/softpos/merchant/institution/view" component={AcquirerOnboardView}/>

        <Route path="/softpos/merchant/keyConfig/acquirerkey/register" component={ AcquirerKeyConfigRegister}/>
        <Route path="/softpos/merchant/keyConfig/securityKey/register" component={ SecurityKeyConfigRegister}/>
        <Route path="/softpos/merchant/keyConfig/securityKeyType/register" component={ SecurityKeyTypeConfigRegister}/>
       
        <Route path="/softpos/merchant/keyConfig/acquirerKey/modify" component={KeyConfigacquirerKeyModifiy}/>
        <Route path="/softpos/merchant/keyConfig/securityKey/modify" component={KeyConfigSecurityKeyModifiy}/>
        <Route path="/softpos/merchant/keyConfig/securityKeyType/modify" component={KeyConfigSecurityKeyTypeModifiy}/>
         
        <Route path="/softpos/merchant/keyConfig/acquirerkey/view" component={AcquirerKeyConfigView}/>
        <Route path="/softpos/merchant/keyConfig/securityKeyType/view" component={SecurityKeyTypeConfigView}/>
        <Route path="/softpos/merchant/keyConfig/securityKey/view" component={SecurityKeyConfigView}/>
        {
          /****Schemes**** */
        }
         <Route path="/softpos/merchant/master/scheme/register" component={ShchemeRegistration}/>
        <Route path="/softpos/merchant/master/scheme/modify" component={ShchemeModify}/>
        <Route path="/softpos/merchant/master/scheme/view" component={ShchemeView}/>

        {
          /****MCC**** */
        }
         <Route path="/softpos/merchant/master/mcc/register" component={MccRegistration}/>
         <Route path="/softpos/merchant/master/mcc/modify" component={MccModify}/>  
         <Route path="/softpos/merchant/master/mcc/view" component={MccView}/> 
  </Switch>
);
