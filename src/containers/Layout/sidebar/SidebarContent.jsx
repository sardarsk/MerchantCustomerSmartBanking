import React from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

const SidebarContent = ({
  onClick, changeToLight, changeToDark, sidebarCollapse,
}) => {
  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title="Onboarding"
          icon="store"
          route="/dashboard/onboarding"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Transactions"
          icon="store"
          route="/dashboard/transactions"
          onClick={hideSidebar}
        />
        {/* <SidebarLink
          title="Country Map View"
          icon="store"
          route="/dashboard/transactionsmapview"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Google Map View"
          icon="store"
          route="/dashboard/googlemapview"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Card & Transactions"
          icon="store"
          route="/card_transactions_dashboard"
          onClick={hideSidebar}
        /> */}
        <SidebarLink
          title="Mobile App"
          icon="smartphone"
          route="/app_dashboard"
          onClick={hideSidebar}
        />
        <SidebarLink
          title="Finance"
          icon="rocket"
          route="/finance_dashboard"
          onClick={hideSidebar}
        />
      </ul>
      <ul className="sidebar__block">

        {/* General Configuration */}
        <SidebarCategory title="General Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Institution Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/config/general_config/institution_type_register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/config/general_config/institution_type_modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/config/general_config/institution_type_view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Card Scheme" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Country Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Currency Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Payment Mode" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Merchant Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Kyc Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="MCC" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Transaction Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Settlement Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Status Code" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Key Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>

        {/* Common Application Configuration */}
        <SidebarCategory title="App Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Institution" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Sequence Master" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Acquirer Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Bin & Card Scheme Map" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>

        {/* Merchant Configuration */}
        <SidebarCategory title="Merchant Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Merchant Master" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Store Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Terminal Master" sidebarCollapse={sidebarCollapse}>
            {/*<SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />*/}
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>

        {/* Network Configuration */}
        <SidebarCategory title="Network Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Network Master" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>

        {/* Validation Configuration */}
        <SidebarCategory title="Validation Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="KYC Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Limit Info" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>

        {/* Security Configuration */}
        <SidebarCategory title="Security Configuration" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Network Key" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Terminal Key" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        {/* Terminal Inventory Configuration */}
        <SidebarCategory title="Terminal Inventory" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="POS" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="File Upload" route="/forms/redux_form/file_upload" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="ATM" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="KIOSK" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/tables/editable_table" onClick={hideSidebar} />
            <SidebarLink title="View" route="/tables/basic_tables" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        <SidebarCategory title="Transaction Search" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Online Txn" route="/filter/transaction/search" onClick={hideSidebar} />
          <SidebarLink title="Settlement Txn" route="/filter/transaction/search" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        <SidebarCategory title="Onboarding" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Merchant" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/onboarding/merchant/register" onClick={hideSidebar} />
            {/*<SidebarLink title="Modify" route="/onboarding/merchant/modify" onClick={hideSidebar} />*/}
            <SidebarLink title="View" route="/onboarding/merchant/view" onClick={hideSidebar} />
          </SidebarCategory>

        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        <SidebarCategory title="Credit Collection" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Config" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Delinquency Criteria" route="/creditCollection/config/DelinquencyCriteria" onClick={hideSidebar} />
            <SidebarLink title="Collection Agent" route="/creditCollection/config/CollectionAgent" onClick={hideSidebar} />
            <SidebarLink title="Bucket Creation" route="/creditCollection/config/BucketCreation" onClick={hideSidebar} />
            {/*<SidebarLink title="enc" route="/creditCollection/config/modify" onClick={hideSidebar} />*/}
            <SidebarLink title="View" route="/creditCollection/config/view" onClick={hideSidebar} />
          </SidebarCategory>

          <SidebarCategory title="Details" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Customer Details" route="/creditCollection/details/view/CustomerDetailsView" onClick={hideSidebar} />
            <SidebarLink title="Delinquency Account" route="/creditCollection/details/view/DelinquencyAccount" onClick={hideSidebar} />
          </SidebarCategory>

        </SidebarCategory>
      </ul>
      {/* SoftPos */}
      <ul className="sidebar__block">
        <SidebarCategory title="SoftPOS " icon="file-add" sidebarCollapse={sidebarCollapse}>

        <SidebarCategory title="Master" sidebarCollapse={sidebarCollapse}>
        <SidebarCategory title="MCC" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/institution/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/institution/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/institution/view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Scheme" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/master/scheme/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/master/scheme/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/master/scheme/view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Country" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/institution/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/institution/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/institution/view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Currency" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/institution/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/institution/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/institution/view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Transaction Type" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/institution/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/institution/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/institution/view" onClick={hideSidebar} />
          </SidebarCategory>
          </SidebarCategory>

          <SidebarCategory title="Acquirer Onboarding" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/institution/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/institution/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/institution/view" onClick={hideSidebar} />
          </SidebarCategory>

          <SidebarCategory title="Keys Configuration" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/keyConfig/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/softpos/merchant/keyConfig/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/softpos/merchant/keyConfig/view" onClick={hideSidebar} />

          </SidebarCategory>

          <SidebarCategory title="Merchant Onboarding" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="View and Modify" route="/softpos/merchant/merchant/modify" onClick={hideSidebar} />
          </SidebarCategory>

          <SidebarCategory title="Basic Configuration" sidebarCollapse={sidebarCollapse}>

            <SidebarCategory title="Theme & Slider Confi" sidebarCollapse={sidebarCollapse}>
              <SidebarLink title="Register" route="/softpos/merchant/register/uiconf" onClick={hideSidebar} />
              <SidebarLink title="View" route="/softpos/merchant/uiconfigurationtheme/view" onClick={hideSidebar} />
            </SidebarCategory>

            <SidebarCategory title="Param Configuration" sidebarCollapse={sidebarCollapse}>
              <SidebarLink title="Register" route="/softpos/merchant/paramconf" onClick={hideSidebar} />
            </SidebarCategory>

            <SidebarCategory title="Other Configuration" sidebarCollapse={sidebarCollapse}>
              <SidebarLink title="Register" route="/softpos/merchant/uiconfigurationOther/register" onClick={hideSidebar} />
              <SidebarLink title="View" route="/softpos/merchant/uiconfigurationOther/view" onClick={hideSidebar} />

            </SidebarCategory>
          </SidebarCategory>

          <SidebarCategory title="Terminal Onboarding" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/softpos/merchant/terminalonboarding" onClick={hideSidebar} />
          </SidebarCategory>

        </SidebarCategory>
      </ul>
      {/* YCASH_KIOSK */}
      <ul className="sidebar__block">
        <SidebarCategory title="YCASH" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Functions" route="/ycash/kiosk/functions" onClick={hideSidebar} />
          {/*<SidebarLink title="Modify" route="/onboarding/merchant/modify" onClick={hideSidebar} />*/}
          <SidebarLink title="View" route="/ycash/kiosk/view" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>
      {/* CMS */}
      <ul className="sidebar__block">
        <SidebarCategory title="CMS" icon="file-add" sidebarCollapse={sidebarCollapse}>

          <SidebarCategory title="General Menu" sidebarCollapse={sidebarCollapse}>

            <SidebarCategory title="User Administration" sidebarCollapse={sidebarCollapse}>

              <SidebarCategory title="Menu Parameters" sidebarCollapse={sidebarCollapse}>
                <SidebarCategory title="Modules" sidebarCollapse={sidebarCollapse}>
                  <SidebarLink title="Register" route="/cms/general/generalMenu/userAdministration/menuParameters/modules/register" onClick={hideSidebar} />
                  <SidebarLink title="Modify" route="/cms/general/generalMenu/userAdministration/menuParameters/modules/modify" onClick={hideSidebar} />
                  <SidebarLink title="View" route="/cms/general/generalMenu/userAdministration/menuParameters/modules/view" onClick={hideSidebar} />
                </SidebarCategory>

                <SidebarCategory title="Function Groups" sidebarCollapse={sidebarCollapse}>
                  <SidebarLink title="Register" route="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/register" onClick={hideSidebar} />
                  <SidebarLink title="Modify" route="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/modify" onClick={hideSidebar} />
                  <SidebarLink title="View" route="/cms/general/generalMenu/userAdministration/menuParameters/functionGroups/view" onClick={hideSidebar} />
                </SidebarCategory>

                <SidebarCategory title="Functions" sidebarCollapse={sidebarCollapse}>
                  <SidebarLink title="Register" route="/cms/general/generalMenu/userAdministration/menuParameters/functions/register" onClick={hideSidebar} />
                  <SidebarLink title="Modify" route="/cms/general/generalMenu/userAdministration/menuParameters/functions/modify" onClick={hideSidebar} />
                  <SidebarLink title="View" route="/cms/general/generalMenu/userAdministration/menuParameters/functions/view" onClick={hideSidebar} />
                </SidebarCategory>
              </SidebarCategory>

              <SidebarLink title="Reports" route="/cms/general/generalMenu/userAdministration/reports/view" onClick={hideSidebar} />
              <SidebarCategory title="User Roles" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Register" route="/cms/general/generalMenu/userAdministration/userRoles/register" onClick={hideSidebar} />
                <SidebarLink title="Modify" route="/cms/general/generalMenu/userAdministration/userRoles/modify" onClick={hideSidebar} />
                <SidebarLink title="View" route="/cms/general/generalMenu/userAdministration/userRoles/view" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarCategory title="User Accounts" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Register" route="/cms/general/generalMenu/userAdministration/userAccounts/register" onClick={hideSidebar} />
                <SidebarLink title="Modify" route="/cms/general/generalMenu/userAdministration/userAccounts/modify" onClick={hideSidebar} />
                <SidebarLink title="View" route="/cms/general/generalMenu/userAdministration/userAccounts/view" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarLink title="Admin Parameters" route="/omapay/merchant/register" onClick={hideSidebar} />

            </SidebarCategory>


            <SidebarCategory title="Card Holder" sidebarCollapse={sidebarCollapse}>

              <SidebarCategory title="Cards & Customer" sidebarCollapse={sidebarCollapse}>
                <SidebarCategory title="Customers" sidebarCollapse={sidebarCollapse}>
                  <SidebarLink title="Register" route="/cms/general/generalMenu/cardHolder/cards&Customers/customers/register" onClick={hideSidebar} />
                  <SidebarLink title="Modify" route="/cms/general/generalMenu/cardHolder/cards&Customers/customers/modify" onClick={hideSidebar} />
                  <SidebarLink title="View" route="/cms/general/generalMenu/cardHolder/cards&Customers/customers/view" onClick={hideSidebar} />
                </SidebarCategory>
              </SidebarCategory>


            </SidebarCategory>
            {/* New Menu Added */}
            <SidebarLink title="Generate Card" route="/cms/general/generalMenu/CardGeneration/CustomerCardGeneration" onClick={hideSidebar} />
            <SidebarLink title="Activate Card " route="/cms/general/generalMenu/cardHolder/cards&Customers/customers/register/CustomerRegistration" onClick={hideSidebar} />
            <SidebarLink title="Create Account " route="/cms/general/generalMenu/AccountGeneration/CustomerAccountGeneration" onClick={hideSidebar} />


          </SidebarCategory>

        </SidebarCategory>
      </ul>
      {/* OmaPay */}
      <ul className="sidebar__block">
        <SidebarCategory title="OMA Pay " icon="file-add" sidebarCollapse={sidebarCollapse}>
          {/* <SidebarCategory title="Payment Processor" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Reports" route="/omapay/payment/paymentProcessor/reports/view" onClick={hideSidebar} />
            <SidebarLink title="Add Risk Controls" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Auth Match Validate" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Auth Archive" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Auth Match" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Pending Auths" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Admin Messages" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Association Routings" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Bin Routings" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Interfaces" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Interfaces Types" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Online Auths" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Online Cards" route="/omapay/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Response Conversions" route="/omapay/payment/paymentProcessor/responsecon/modify" onClick={hideSidebar} />
          </SidebarCategory> */}
          <SidebarCategory title="Fraud" sidebarCollapse={sidebarCollapse}>
            {/* Acquirer Menu*/}
            {/* <SidebarCategory title="Acquirer" sidebarCollapse={sidebarCollapse}>
              <SidebarCategory title="Rules" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Authorizations" route="/omapay/payment/modify" onClick={hideSidebar} />
                <SidebarLink title="Transactions" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarCategory title="Authorizations" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Transgressions" route="/omapay/merchant/register" onClick={hideSidebar} />
                <SidebarLink title="Transg Rules" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarCategory title="Transactions" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Transgressions" route="/omapay/merchant/register" onClick={hideSidebar} />
                <SidebarLink title="Transg Rules" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
            </SidebarCategory> */}
            {/* Issuer Menu */}
            {/* <SidebarCategory title="Issuer" sidebarCollapse={sidebarCollapse}>
              <SidebarCategory title="Rules" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Authorizations" route="/omapay/merchant/register" onClick={hideSidebar} />
                <SidebarLink title="Transactions" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarCategory title="Authorizations" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Transgressions" route="/omapay/merchant/register" onClick={hideSidebar} />
                <SidebarLink title="Transg Rules" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
              <SidebarCategory title="Transactions" sidebarCollapse={sidebarCollapse}>
                <SidebarLink title="Transgressions" route="/omapay/merchant/register" onClick={hideSidebar} />
                <SidebarLink title="Transg Rules" route="/omapay/merchant/register" onClick={hideSidebar} />
              </SidebarCategory>
            </SidebarCategory> */}
            {/*Parameters Menu */}
            {/* <SidebarCategory title="Parameters" sidebarCollapse={sidebarCollapse}>
              <SidebarLink title="High Risk Countries" route="/softpos/merchant/register" onClick={hideSidebar} />
              <SidebarLink title="High Risk Country Groups" route="/softpos/merchant/register" onClick={hideSidebar} />
              <SidebarLink title="High Risk MCC Groups" route="/softpos/merchant/register" onClick={hideSidebar} />
              <SidebarLink title="High Risk MCC" route="/softpos/merchant/register" onClick={hideSidebar} />
            </SidebarCategory> */}
            <SidebarLink title="Processors" route="/softpos/merchant/register" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>
      </ul>
      <ul className="sidebar__block">
        <SidebarCategory title="Forms" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Redux form" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Basic Form" route="/forms/redux_form/basic_form" onClick={hideSidebar} />
            <SidebarLink
              title="Check Form Controls"
              route="/forms/redux_form/check_form_controls"
              onClick={hideSidebar}
            />
            <SidebarLink title="File Upload" route="/forms/redux_form/file_upload" onClick={hideSidebar} />
            <SidebarLink
              title="Floating Labels Form"
              route="/forms/redux_form/floating_labels_form"
              onClick={hideSidebar}
            />
            <SidebarLink title="Form Dropzone" route="/forms/redux_form/form_dropzone" onClick={hideSidebar} />
            <SidebarLink title="Form Layouts" route="/forms/redux_form/form_layouts" onClick={hideSidebar} />
            <SidebarLink title="Form Picker" route="/forms/redux_form/form_picker" onClick={hideSidebar} />
            <SidebarLink title="Form Validation" route="/forms/redux_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Mask Form" route="/forms/redux_form/mask_form" onClick={hideSidebar} />
            <SidebarLink title="Material Form" route="/forms/redux_form/material_form" onClick={hideSidebar} />
            <SidebarLink title="Wizard Form" route="/forms/redux_form/wizard_form" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="React hook form" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Basic Form" route="/forms/react_hook_form/basic_form" onClick={hideSidebar} />
            <SidebarLink title="Form Validation" route="/forms/react_hook_form/form_validation" onClick={hideSidebar} />
            <SidebarLink title="Wizard form" route="/forms/react_hook_form/wizard_form" onClick={hideSidebar} />
          </SidebarCategory>
        </SidebarCategory>
        <SidebarCategory title="Tables" icon="list" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Basic tables" route="/tables/basic_tables" onClick={hideSidebar} />
          <SidebarLink title="Data table" newLink route="/tables/data_table" onClick={hideSidebar} />
          <SidebarLink title="Drag & Drop table" newLink route="/tables/dnd_table" onClick={hideSidebar} />
          <SidebarLink title="Editable table" route="/tables/editable_table" onClick={hideSidebar} />
          <SidebarLink title="Material table" route="/tables/material_table" onClick={hideSidebar} />
          <SidebarLink
            title="Width resizable table"
            newLink
            route="/tables/resizable_table"
            onClick={hideSidebar}
          />
        </SidebarCategory>


      </ul>
      <ul className="sidebar__block">
        {/* <SidebarCategory title="Account" icon="user" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Email Confirmation" route="/account/email_confirmation" />
          <SidebarLink title="Lock Screen" route="/lock_screen" />
          <SidebarLink title="Log In Photo" route="/log_in_photo" />
          <SidebarLink title="Profile" route="/account/profile" onClick={hideSidebar} />
          <SidebarLink title="Register" route="/register" />
          <SidebarLink title="Register Photo" route="/register_photo" />
          <SidebarLink title="Reset Password" route="/reset_password" newLink />
          <SidebarLink title="Reset Password Photo" route="/reset_password_photo" newLink />
        </SidebarCategory> */}
        {/* <SidebarCategory title="E-commerce" icon="cart" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Cart" route="/e-commerce/cart" onClick={hideSidebar} />
          <SidebarLink title="Catalog" route="/e-commerce/catalog" onClick={hideSidebar} />
          <SidebarLink title="Orders List" route="/e-commerce/orders_list" onClick={hideSidebar} />
          <SidebarLink title="Payment" route="/e-commerce/payment" onClick={hideSidebar} />
          <SidebarLink title="Product Edit" route="/e-commerce/product_edit" onClick={hideSidebar} />
          <SidebarLink title="Product Page" route="/e-commerce/product_page" onClick={hideSidebar} />
          <SidebarLink title="Products List" route="/e-commerce/products_list" onClick={hideSidebar} />
        </SidebarCategory> */}
        {/* <SidebarCategory title="Default Pages" icon="file-empty" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="404" route="/404" />
          <SidebarLink title="Calendar" route="/default_pages/calendar" onClick={hideSidebar} />
          <SidebarLink title="FAQs" route="/default_pages/faq" onClick={hideSidebar} />
          <SidebarLink title="Gallery" route="/default_pages/gallery" onClick={hideSidebar} />
          <SidebarLink title="Invoice template" route="/default_pages/invoice_template" onClick={hideSidebar} />
          <SidebarLink title="Pricing Cards" route="/default_pages/pricing_cards" onClick={hideSidebar} />
          <SidebarLink title="Project Summary" route="/default_pages/project_summary" onClick={hideSidebar} />
        </SidebarCategory> */}
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" />
      </ul>
      {/* <ul className="sidebar__block">
        <SidebarLink
          title="Documentation"
          icon="text-align-justify"
          route="/documentation/introduction"
          onClick={hideSidebar}
        />
      </ul> */}
    </div>
  );
};

SidebarContent.propTypes = {
  changeToDark: PropTypes.func.isRequired,
  changeToLight: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  sidebarCollapse: PropTypes.bool,
};

SidebarContent.defaultProps = {
  sidebarCollapse: false,
};

export default SidebarContent;
