import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CmsService from '../../../utils/api/CMS/CmsService';
import LoginRegisterForm from './component/LoginRegisterForm';
import PopUpResponse from './component/PopUpResponse';
import { successNofication, showNotification } from '../../../shared/components/Notification'
import { Redirect } from 'react-router';
//import LogIn from '../../Account/LogIn/index';
import LogIn from '../../../containers/Account/LogIn/index'
import { Route, Switch } from 'react-router-dom';

const RegisterFormApiCall = props => {
  const { files } = props;
  useEffect(() => {
    fetchInstitution();
    fetchCountryCode();
  }, [])


  const [data, setData] = useState(null);
  const [countryCodeData, setCountryCodeData] = useState(null);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [images, setImages] = useState([]);
  const [isRedirect, setIsRedirect] = useState(false);
  const fetchInstitution = async () => {

    const response = await CmsService.customerOnBoardingUrl.GetAllInstitution();
    if (response) {
      const tableData = {
        mapData: response && response.data && response.data.institution.map(item => ({
          instId: item.instId,
          instName: item.instName,
          instDescription: item.description,

        })),
      }
      setData(tableData)
    };
  }
  const fetchCountryCode = async () => {

    const response = await CmsService.customerOnBoardingUrl.GetAllCurrencyCode();
    if (response) {
      const tableData = {
        mapData: response && response.data.currencyRate && response.data.currencyRate.map(item => ({
          mobileCountryCode: item.mobileCountryCode,
          description: item.description,
          // instDescription: item.description,

        })),
      }
      setCountryCodeData(tableData)
    };
  }
  const onClose = () => {
    setOpenPopUp(false);

  }

  let ImagesData = [];
  const uploadFileHandler = (event) => {
    debugger;
    ImagesData.push(event[0]);

  };

  //   const handleSubmit = async (formValues) => {

  //    const response =await api.uiConfigApis.AddUiConfigData(formValues);
  //     window.alert("Successfull Added UI Configuration");

  //     if(response.status === 200 && response.data.statusCode===200){
  //       window.alert("UI Configuration Data Inserted Successfully ");
  //       setIsRedirect(true);
  //     }
  //     else
  //       window.alert("Failed for UI Configuration"+`${JSON.stringify(response, null, 2)}`);

  //   };

  const handleSubmit = async (form) => {

   // window.alert("Customer added successfuly!!" + `${JSON.stringify(form)}`);

    console.log(ImagesData);
    if (form && form != null) {
      if (form.userName.trim() !== "") {
        const response = await CmsService.customerOnBoardingUrl.getToFindActiveUser(form.userName);

        if (response.status === 200 && response.data === true) {
          // console.log("here",response.data);
          // window.alert("User Name already exist ,Please try with another User");
          setOpenPopUp(true);
          // setuserName("Please try with another userName");
        }
        else {
          // var blobImageData = new FormData();
          // blobImageData.append(
          //   'file',
          //   form.poaFront ,
          //   //form.poaFront[0].preview,
          //   //form.poaBack,
          //   // form.poaBack[0].preview
          // );
          // blobImageData.append(
          //   'file',
          //   form.poaBack ,
          //   //form.poaFront[0].preview,
          //   //form.poaBack,
          //   // form.poaBack[0].preview
          // );

          // let imageSliders = [];
          // imageSliders.push({ "file": form.poaFront });
          // imageSliders.push({ "file": form.poaBack });

          // let customerRegistrationRequest = {
          //   userName: form.userName,
          //   password: form.password,
          //   firstName: form.firstName,
          //   lastName: form.lastName,
          //   emailId: form.email,
          //   mobileCountryCode: form.countryCode.value,
          //   mobileNumber: form.mobileNumber,
          //   instId: form.institutionBank.value,
          //   kycType: "E-KYC",
          //   //file: form.poaBack[0],
          //   // kycBackImage: form.poaBack[0].preview,
          //   biometricData: "biometricData",

          // };
          console.log("instName==>" + form.institutionBank.value);
          const formData = new FormData();
          formData.append('file', ImagesData[0]);
          formData.append('kycType', "E-KYC");
          formData.append('instId', form.institutionBank.value);
          formData.append('userName', form.userName);
          formData.append('password', form.password);
          formData.append('firstName', form.firstName);
          formData.append('lastName', form.lastName);
          formData.append('emailId', form.email);
          formData.append('mobileCountryCode', form.countryCode.value);
          formData.append('mobileNumber', form.mobileNumber);
          formData.append('biometricData', "biometricData");

          try {

            const responseData = await CmsService.customerOnBoardingUrl.registerCustomer(formData);
            if (responseData.status === 200) {

               setIsRedirect(true);
              // console.log("instName==>"+form.institutionBank.value);
              // console.log("instName==>"+responseData.data.custId);

              // const formData = new FormData();
              // formData.append('file', ImagesData[0]);
              // formData.append('kycType',"E-KYC" );
              // formData.append('instId',form.institutionBank.value);
              // formData.append('custId',responseData.data.custId);
              // console.log("formData-->"+formData);
              // const response = await CmsService.customerOnBoardingUrl.addOrUpdateKYCInfoWithUsername(formData,form.institutionBank.value);


              // if (response.status === 200) {
              // alert("inserted successfully..");
              //RegisterFormApiCall.push('/log_in');
              successNofication(
                "theme-light",
                "ltr",
                `SuccessCode: ${responseData.data.responseMessage}`
                // `Message: UI Configuration added`,
              );

             

              //window.location.reload();
            } else if (responseData.status === 400) {
              alert("Customer registration failed..");
              showNotification(
                "theme-light",
                "ltr",
                `SuccessCode: ${responseData.data.statusCode}`,
                `Message: ${responseData.data.responseMessage}`,
              );
            }
            else {
              showNotification(
                "theme-light",
                "ltr",
                `SuccessCode: ${responseData.data.statusCode}`,
                `Message: ${responseData.data.errorMessage}`,
              );
            }
            // }
          } catch (error) {
            console.error("sass========>" + error);
          }
        }
      }
    }
  }
 if(isRedirect){
  return <Redirect to="/log_in" />;
 }
  return (
    <Container>
      {
        (data && data != null) &&
        <Row>
          <LoginRegisterForm data={data} countryCodeData={countryCodeData} onSubmit={handleSubmit} uploadFileHandler={uploadFileHandler} />
        </Row>
      }

      {
        (openPopUp) &&
        <Row>
          <PopUpResponse onClose={onClose} />
        </Row>
      }
    </Container>
  );

};


RegisterFormApiCall.propTypes = {
  tableData: PropTypes.shape(),
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterFormApiCall);