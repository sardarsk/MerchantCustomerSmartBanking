import React, { useEffect, useState } from 'react';

import { Redirect } from 'react-router-dom';
import {  Container } from 'reactstrap';
import { fetchUiConfigData } from '../../actions';
import PropTypes from 'prop-types';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList'
import { successNofication ,showNotification} from '../../../../../../shared/components/Notification';

import SoftPosUiConfigMain from './components/SoftPosUiConfigMain';

import { connect } from 'react-redux';

const ThemeSliderConfigRegistration = ({ fetchDataAction, tableData })=> {
  var selectedData=[];
  const [isRedirect, setIsRedirect] = useState(false);
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  if(null != tableData && null != tableData.mapData){
    selectedData = tableData.mapData
  }


  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    window.alert(`You submitted:\n\n${JSON.stringify(formValues)}`);
    var object = {};
    formValues["primaryColour"] = formValues["primary1"];
    object["acquirerId"]=formValues["acquirerDefinition"]["value"];
    object["materialThemeTwo"]=formValues;
    object["imageSlider"]={"imagePath":formValues["imagesliderpath"]}
    console.log(object);
    console.log("api call");
    const response =  await SoftPosBakendApi.uiConfigApis.AddUiConfigData(object);
    if(response.status === 200){
      successNofication(
        "theme-light",
        "ltr",
        `SuccessCode: ${response.data.statusCode}`,
        `Message: UI Configuration added`,
      );
    window.location.reload();
    }else if(response.status === 208){
      showNotification(
        "theme-light",
        "ltr",
        `SuccessCode: ${response.data.statusCode}`,
        `Message: ${response.data.errorMessage}`,
      );
    }else {
      showNotification(
        "theme-light",
        "ltr",
        `SuccessCode: ${response.data.statusCode}`,
        `Message: ${response.data.errorMessage}`,
      );
    }

  };
  if (isRedirect) {
    return <Redirect to="/onboarding/merchant/register" />;
  }

// const MerchanantOnboard = () => {
//   const [isRedirect, setIsRedirect] = useState(false);
//   const { t } = useTranslation('common');

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

//   if (isRedirect) {
//     return <Redirect to="/softpos/merchant/register/uiconf" />;
//   }

  return (
    <Container>
      <SoftPosUiConfigMain onSubmit={handleSubmit}  selectionData={selectedData} />
    </Container>
  );
};


ThemeSliderConfigRegistration.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

ThemeSliderConfigRegistration.defaultProps = {
  tableData: null,
};


const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchUiConfigData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSliderConfigRegistration);