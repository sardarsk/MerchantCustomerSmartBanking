import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import FirebaseIcon from 'mdi-react/FirebaseIcon';
//import withAuthFirebase from '@/shared/components/auth/withAuthFirebase';
//import { useAuth0 } from '@/shared/components/auth/withAuth0';
import Loading from '@/shared/components/Loading';
import LogInForm from '@/shared/components/loginForm/LogInForm';
import GoogleAuthBtn from '../AuthBtn/googleAuthBtn';
import FacebookAuthBtn from '../AuthBtn/fbAuthBtn';
import { Redirect } from 'react-router';
import CmsService from '../../../utils/api/CMS/CmsService';
const auth0Icon = `${process.env.PUBLIC_URL}/img/auth0.svg`;

const LogIn = ({ changeIsOpenModalFireBase }) => {

  const [isRedirect, setIsRedirect] = useState(false);


  const [errorMsg, setErrorMsg] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  /*
    const {
      loginWithRedirect, loading,
    } = useAuth0();
    if (loading) {
      return (<Loading loading={loading} />);
    }
  */
  const handleSubmit = async (formValues) => {
    // window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    // window.alert("Successfull Merchant Registration:)}");
    console.log("here");

    let userRequest = {
      userName: formValues.userName,
      password: formValues.password,
      instId: formValues.instId
    }
    // const response = await CmsService.customerOnBoardingUrl.getToFindActiveUser(userRequest);

    // if (response.status === 200 && response.data === true) {
      
    // }

    if (formValues && formValues != null) {
      if (formValues.username.trim() === "ashwini" && formValues.password === "1111") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      } else if (formValues.username.trim() === "v.vysotsky@finik.pro" && formValues.password === "vys0tsky@Card") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      } else if (formValues.username.trim() === "majdi@wizzpay.tech" && formValues.password === "m@di@Card") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      } else if (formValues.username.trim() === "admin" && formValues.password === "1111") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      } else if (formValues.username.trim() === "vasyl@wizzfinancial.com" && formValues.password === "V@asy|Card") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      } else if (formValues.username.trim() === "yash@wizzpay.tech" && formValues.password === "Y@sh|Card") {
        setIsRedirect(true);
        localStorage.setItem('token', 'testing12345');
        localStorage.setItem("isAuthenticated", "true");
      }
      else {
        setErrorMsg(true)
        setErrorMessage("wrong credentials")
        // showNotification(
        //   "theme-light",
        //   "ltr",
        //   `SuccessCode: 204`,
        //   `Message: Wrong Credentials`,
        // );
      }
    } else {
      setErrorMsg(true)
      setErrorMessage("wrong credentials")
      // showNotification(
      //   "theme-light",
      //   "ltr",
      //   `SuccessCode: 204`,
      //   `Message: Wrong Credentials`,
      // );
    }
    // if(response.status === 200){
    //   window.alert("UI Configuration Data Inserted Successfully "+`${response.data.registrationNumber}`);
    // }
    // else
    //   window.alert("Failed for UI Configuration"+`${JSON.stringify(response, null, 2)}`);

  };


  if (isRedirect) {
    return <Redirect to="/dashboard/onboarding" />;
  }
  return (

    // <div className="account  account--not-photo">

    <div className="account account--not-photo">

      <div className="account__wrapper">
        <div className="account__card">
          <div className="account__head">
            <h3 className="account__title">

              {/* <span className="account__logo"> SOFTPOS */}

              <span className="account__logo"> CMS

                <span className="account__logo-accent"> Solution</span>
              </span>
            </h3>
          </div>
          <LogInForm onSubmit={handleSubmit} errorMessage={errorMessage} errorMsg={errorMsg} form="modal_login" />
        </div>
      </div>
    </div>
  );
};

LogIn.propTypes = {
  changeIsOpenModalFireBase: PropTypes.func.isRequired,
};

//export default withAuthFirebase(LogIn);
export default LogIn;
