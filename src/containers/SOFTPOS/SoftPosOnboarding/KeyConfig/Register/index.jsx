import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import KeyConfigFormMain from './components/KeyConfigFormMain'
import { fetchKeyConfigurationData } from '../actions';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';


const KeyConfigurationRegister = ({ fetchDataAction, tableData })=> {

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  console.log("KeyConfigurationRegister");
  let selectionData = {};
  // let selectionDataList = [];
  if(null != tableData && null != tableData.mapData){
    selectionData = {acquirerKeyTypeDefinitions: tableData.mapData[0].acquirerKeyTypeDefinitions,
                      acquirerDefinitions: tableData.mapData[0].acquirerDefinitions,
                     securityKeyTypeDefinitions: tableData.mapData[0].securityKeyTypeDefinitions  };
    // selectionData.acquirerKeyTypeDefinitions.map(item => {
    //   selectionDataList.push({"label":item.guid,"value":item.keyUnderLmk})
    // });
  }
  console.log("selectionData in index");
  console.log(selectionData);
  // console.log(selectionDataList);
  
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    console.log("api call");
    const response = await SoftPosBakendApi.keyConfigurationApi.submitKeyConfig(JSON.stringify(formValues, null, 2));
    window.alert("Successfull Merchant Registration: "+`${JSON.stringify(response, null, 2)}`);

    if(response.status === 200){
      window.alert("Successfull.. Registration Number: "+`${response.data.registrationNumber}`);
      setIsRedirect(true);
    }
    else
      window.alert("Failed for Merchant Registration: "+`${JSON.stringify(response, null, 2)}`);

  };

  if (isRedirect) {
    return <Redirect to="/onboarding/merchant/register" />;
  }

  return (
    <Container>
      <KeyConfigFormMain onSubmit={handleSubmit} selectionData={selectionData} />
    </Container>
  );
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchKeyConfigurationData,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyConfigurationRegister);