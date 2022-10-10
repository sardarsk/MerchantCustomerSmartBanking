import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import FormData from './components/HorizontalFormTwo';
import { fetchMerchantOnBoardingDefaultData } from '../actions';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

const MerRegister = ({ fetchDataAction, tableData }) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let selectionData = {};
  if (null != tableData && null != tableData.mapData) {
    selectionData = {
      tmsMasterMccTypes: tableData.mapData[0].tmsMasterMccTypes,
      acquirerAcquirerDefinition: tableData.mapData[0].acquirerAcquirerDefinition,
      tmsMasterCities:tableData.mapData[0].tmsMasterCities
    };
  }
  const [isRedirect, setIsRedirect] = useState(false);
  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    console.log("api call");
    const response = await SoftPosBakendApi.MerchantOnboardingAPI.addMerchantOnboardingData(JSON.stringify(formValues));
    window.alert("Successfull Merchant Registration: " + `${JSON.stringify(response, null, 2)}`);

    if (response.status === 200) {
      window.alert("Successfull.. Registration Number: " + `${response.data.registrationNumber}`);
      setIsRedirect(true);
    }
    else
      window.alert("Failed for Merchant Registration: " + `${JSON.stringify(response, null, 2)}`);

  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/merchant/merReg/register" />;
  }

  return (
    <Container>
      <FormData onSubmit={handleSubmit} selectionData={selectionData} />
    </Container>
  );
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchMerchantOnBoardingDefaultData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MerRegister);