import AcquirerOnboardApi from './AcquirerOnboardApi';
import KeyConfigurationApi from './KeyConfigurationApi';
import UiConfigApis from './UiConfigApis';
import GeneralSoftPosApi from './GeneralSoftPosApi';
import ParamConfigApis from './ParamConfigApis';
import OtherUIConfigAPIs from './OtherUIConfigAPIs';

import MccDataApi from './MccApi';
import MerchantOnboardingAPI from './MerchantOnboardingAPI';
import TerminalOnboardingAPIs from './TerminalOnboardingAPIs';

const SoftPosBakendApi = {
  acquirerApisView: AcquirerOnboardApi,
  keyConfigurationApi: KeyConfigurationApi,
  uiConfigApis:UiConfigApis,
  generalSoftPosApi:GeneralSoftPosApi,
  paramConfigApis: ParamConfigApis,
  MccData:MccDataApi,
  MerchantOnboardingAPI:MerchantOnboardingAPI,
  TerminalOnboardingAPIs:TerminalOnboardingAPIs,
  OtherUIConfigAPIs:OtherUIConfigAPIs
};

export default SoftPosBakendApi;
