import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import firebase from 'firebase/app';
import LoginRegisterForm from '../../../shared/components/login_register/component/LoginRegisterForm';

const Register = ({ history }) => {
  const [error, setError] = useState('');

  const registerFireBase = (user) => {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then(() => {
        history.push('/log_in');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="account account--not-photo">
      <div className="account__wrapper">
        <div className="account__card_creation">
          <div className="account__head">
            <h3 className="account__title">Welcome to
              <span className="account__logo"> 
                <span className="account__logo-accent">CMS</span>
              </span>
            </h3>
            <h4 className="account__subhead subhead">Fill below for registration</h4>
          </div>
          <LoginRegisterForm onSubmit={registerFireBase} errorMessage={error} />
          <div className="account__have-account">
            <p>Already have an account? <NavLink to="/log_in">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(Register);
