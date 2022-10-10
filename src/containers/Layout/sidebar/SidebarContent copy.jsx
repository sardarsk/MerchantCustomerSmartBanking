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
        <SidebarLink
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
        />
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
            <SidebarLink title="View" route="/filter/transaction/search" onClick={hideSidebar} />
            <SidebarLink title="View" route="/filter/transaction/search" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>
      
      <ul className="sidebar__block">
        <SidebarCategory title="Onboarding" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Merchant" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Register" route="/onboarding/merchant/register" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/onboarding/merchant/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/onboarding/merchant/view" onClick={hideSidebar} />
          </SidebarCategory>

        </SidebarCategory>
      </ul>

      <ul className="sidebar__block">
        <SidebarCategory title="User Management" icon="file-add" sidebarCollapse={sidebarCollapse}>
          <SidebarCategory title="Profile" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Add" route="/user_management/profile/add" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/user_management/profile/modify" onClick={hideSidebar} />
            <SidebarLink title="View" route="/user_management/profile/view" onClick={hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="User" sidebarCollapse={sidebarCollapse}>
            <SidebarLink title="Users" route="/user_management/user/user_view" onClick={hideSidebar} />
            <SidebarLink title="Add" route="/user_management/user/register" onClick={hideSidebar} />
            <SidebarLink title="Approve" route="/user_management/user/approve" onClick={hideSidebar} />
            <SidebarLink title="Modify" route="/user_management/user/modify" onClick={hideSidebar} />
            <SidebarLink title="Reset Password" route="/user_management/user/reset_password" onClick={hideSidebar} />
            <SidebarLink title="Verify Email" route="/user_management/user/verify_Email" onClick={hideSidebar} />
            <SidebarLink title="Verify Mobile" route="/user_management/user/verify_Mobile" onClick={hideSidebar} />
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
        <SidebarCategory title="Account" icon="user" isNew sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Email Confirmation" route="/account/email_confirmation" />
          <SidebarLink title="Lock Screen" route="/lock_screen" />
          <SidebarLink title="Log In Photo" route="/log_in_photo" />
          <SidebarLink title="Profile" route="/account/profile" onClick={hideSidebar} />
          <SidebarLink title="Register" route="/register" />
          <SidebarLink title="Register Photo" route="/register_photo" />
          <SidebarLink title="Reset Password" route="/reset_password" newLink />
          <SidebarLink title="Reset Password Photo" route="/reset_password_photo" newLink />
        </SidebarCategory>
        <SidebarCategory title="E-commerce" icon="cart" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="Cart" route="/e-commerce/cart" onClick={hideSidebar} />
          <SidebarLink title="Catalog" route="/e-commerce/catalog" onClick={hideSidebar} />
          <SidebarLink title="Orders List" route="/e-commerce/orders_list" onClick={hideSidebar} />
          <SidebarLink title="Payment" route="/e-commerce/payment" onClick={hideSidebar} />
          <SidebarLink title="Product Edit" route="/e-commerce/product_edit" onClick={hideSidebar} />
          <SidebarLink title="Product Page" route="/e-commerce/product_page" onClick={hideSidebar} />
          <SidebarLink title="Products List" route="/e-commerce/products_list" onClick={hideSidebar} />
        </SidebarCategory>
        <SidebarCategory title="Default Pages" icon="file-empty" sidebarCollapse={sidebarCollapse}>
          <SidebarLink title="404" route="/404" />
          <SidebarLink title="Calendar" route="/default_pages/calendar" onClick={hideSidebar} />
          <SidebarLink title="FAQs" route="/default_pages/faq" onClick={hideSidebar} />
          <SidebarLink title="Gallery" route="/default_pages/gallery" onClick={hideSidebar} />
          <SidebarLink title="Invoice template" route="/default_pages/invoice_template" onClick={hideSidebar} />
          <SidebarLink title="Pricing Cards" route="/default_pages/pricing_cards" onClick={hideSidebar} />
          <SidebarLink title="Project Summary" route="/default_pages/project_summary" onClick={hideSidebar} />
        </SidebarCategory>
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" />
      </ul>
      <ul className="sidebar__block">
        <SidebarLink
          title="Documentation"
          icon="text-align-justify"
          route="/documentation/introduction"
          onClick={hideSidebar}
        />
      </ul>
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
