import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import KeyConfigFormMain from './components/HorizontalFormTwo'
import { fetchData } from '../actions';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';

const KeyConfigurationRegister = ({ fetchDataAction, tableData }) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let selectionData = {};
  if (null != tableData && null != tableData.mapData) {
    selectionData = {
      acquirerAcquirerDefinition: tableData.mapData[0].acquirerAcquirerDefinition,
      tmsMasterCurrency:tableData.mapData[0].tmsMasterCurrency,
      tmsMasterCountries:tableData.mapData[0].tmsMasterCountries
    };
  }
  const [isRedirect, setIsRedirect] = useState(false);
  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
     const response = await SoftPosBakendApi.TerminalOnboardingAPIs.addTerminalOnboardingData(JSON.stringify(formValues));
    //window.alert("Successfull Merchant Registration: " + `${JSON.stringify(response, null, 2)}`);

    if (response.status === 200) {
      window.alert("Successfull Added Terminal");
      setIsRedirect(true);
    }
    else
      window.alert("Operation Failed");

  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/terminalonboarding/registration" />;
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
  fetchDataAction: fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyConfigurationRegister);