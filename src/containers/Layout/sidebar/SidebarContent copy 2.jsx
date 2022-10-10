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
          title="Card & Transactions"
          icon="store"
          route="/card_transactions_dashboard"
          onClick={hideSidebar}
        />

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
      </ul>
      <ul className="sidebar__block">
        <SidebarLink title="Log Out" icon="exit" route="/log_in" />
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
