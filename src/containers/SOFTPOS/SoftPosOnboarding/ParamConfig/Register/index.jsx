import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import { showNotification, successNofication } from '../../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';
import { fetchConfigParamData } from '../View/actions';
//import showResults from '../../Uiconfig/Register/Show';
import ParamConfig from './components/ParamConfigMain';
//import api from '../../../../../../utils/api/onboarding/apiClient';
const ParamConfigurationPage = ({ fetchDataAction, tableData }) => {
  const [isRedirect, setIsRedirect] = useState(false);
  var selectedData = [];
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  if (null != tableData && null != tableData.mapData) {
    selectedData = tableData.mapData
  }
  console.log("selectedData :::" + selectedData);
  
  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
   
    var object = {};
    var kernalId = formValues['kernelId']['value'];
    var transactionType = formValues['transactionType']['value'];
    var aid = formValues['kernelId']['aid'];

    object["applist"] = [{
      "kernel_id":kernalId,
      "transaction_type":transactionType,
      "aid": aid
    }]
    object["capk"] = [{        
          "rid": formValues["rid"],
          "index" : formValues["index"],
          "explen" : formValues["explen"],
          "exponent" : formValues["exponent"] ,
          "keylen" : formValues["keylen"] ,
          "modulus" : formValues["modulus"] 
      }]

    object["entryPoint"] =[
      {
        "kernel_id":kernalId,
        "transaction_type":transactionType,
        "aid": aid,
        "tag_data":formValues["entryPointTagData"]
      }
    ]
    object["kernel"] = [
      {
        "kernel_id":kernalId,
        "transaction_type":transactionType,
        "aid": aid,
        "tag_data":formValues["kernalTagData"]
      }
    ]
    object["revocation"] =[{
      "rid":formValues["rid"],
      "pk_index":formValues["pkIndex"],
      "cert_serial":formValues["certSerial"]
    }]
    object["rdol"] =[{
      "mode":formValues["mode"],
      "rdol_data":formValues["rdolData"]
    }]

    // window.alert("Successfull Merchant Registration: "+`${JSON.stringify(object, null, 2)}`);

    const response = await SoftPosBakendApi.paramConfigApis.AddParamConfig(`${JSON.stringify(object)}`);
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
    } else
    showNotification(
      "theme-light",
      "ltr",
      `SuccessCode: ${response.data.statusCode}`,
      `Message: ${response.data.errorMessage}`,
    );
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/merchant/register" />;
  }

  return (
    <Container>
     <ParamConfig onSubmit={handleSubmit}  selectionData={selectedData} /> 
    </Container>
  );
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchConfigParamData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ParamConfigurationPage);