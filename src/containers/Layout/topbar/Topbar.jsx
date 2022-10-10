import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserProps } from '@/shared/prop-types/ReducerProps';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';
import TopbarLanguage from './TopbarLanguage';

const Topbar = ({
  changeMobileSidebarVisibility, changeSidebarVisibility, user,
}) => (
  <div className="topbar">
    <div className="topbar__left">
      <TopbarSidebarButton
        changeMobileSidebarVisibility={changeMobileSidebarVisibility}
        changeSidebarVisibility={changeSidebarVisibility}
      />
      <Link className="topbar__logo" to="/card_transactions_dashboard" />
    </div>
    <div className="topbar__right">
      <div className="topbar__right-over">
        <TopbarProfile user={user} />
        <TopbarLanguage />
      </div>
    </div>
  </div>
);

Topbar.propTypes = {
  changeMobileSidebarVisibility: PropTypes.func.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  user: UserProps,
};

Topbar.defaultProps = {
  user: {},
};

export default Topbar;
