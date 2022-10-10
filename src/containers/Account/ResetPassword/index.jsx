import React from 'react';
import { NavLink } from 'react-router-dom';
import ResetPasswordForm from '@/shared/components/reset_password/ResetPasswordForm';

const ResetPassword = (props) => {
  const onSubmit = (item) => {
    console.log(item);
  };

  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">
             <span className="account__logo-accent">Password Reset</span>
                   </h3>
   
          </div>
          <ResetPasswordForm
            {...props}
            onSubmit={onSubmit}
            form="reset_password_form"
          />
          <div className="account__have-account">
            <p>Remember your password?  <NavLink to="/log_in">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
