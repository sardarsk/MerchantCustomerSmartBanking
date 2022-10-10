import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import KeyConfigFormMain from './components/HorizontalFormTwo'
import { fetchGetAllAcquirerKeyTypeDefinitionTableData } from '../../actions';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

const KeyConfigurationRegister = ({ fetchDataAction, tableData }) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  console.log("KeyConfigurationRegister");
  let selectionData = {};
  if (null != tableData && null != tableData.mapData) {
    selectionData = {
      acquirerKeyTypeDefinitions: tableData.mapData[0].acquirerKeyTypeDefinitions,
      acquirerDefinitions: tableData.mapData[0].acquirerDefinitions,
    };
  }
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {
    debugger;
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    console.log("api call");
    const response = await SoftPosBakendApi.keyConfigurationApi.submitKeyConfig(JSON.stringify(formValues));
    window.alert("Successfull Merchant Registration: " + `${JSON.stringify(response, null, 2)}`);

    if (response.status === 200) {
      window.alert("Successfull.. Registration Number: " + `${response.data.registrationNumber}`);
      setIsRedirect(true);
    }
    else
      window.alert("Failed for Merchant Registration: " + `${JSON.stringify(response, null, 2)}`);

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
  fetchDataAction: fetchGetAllAcquirerKeyTypeDefinitionTableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(KeyConfigurationRegister);