import React, { useEffect,useState } from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container} from 'reactstrap';
import { fetchAcquirerOnBoardingDefaultData } from '../actions';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';
import AcquirerRegistrationForm from './components/AcquirerOnBoardForm';


const AcquirerOnboardRegister =  ({ fetchDataAction, tableData }) => {
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let selectionData = {};
  if (null != tableData && null != tableData.mapData) {
    selectionData = {
      tmsMasterCountry: tableData.mapData[0].tmsMasterCountries,
      tmsMasterCurrency: tableData.mapData[0].tmsMasterCurrencies,
      tmsAcquirerApplicationIdGenerations:tableData.mapData[0].tmsAcquirerApplicationIdGenerations
    };
  }
  const [isRedirect, setIsRedirect] = useState(false);
  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
     const response = await SoftPosBakendApi.acquirerApisView.AddAcquirerData(formValues);
     if(response.status === 200 && response.data.statusCode===200){
      window.alert("Successfuly added new Acquirer");
      setIsRedirect(true);
    }
    else
      window.alert("Operation Failed due to some reason. Please try again");

  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/institution/register" />;
  }

  return (
    <Container>
      <AcquirerRegistrationForm onSubmit={handleSubmit} selectionData={selectionData}/>
    </Container>
  );
};
const mapStateToProps = state => ({
  tableData: state.transaction.data,
});
const mapDispatchToProps = {
  fetchDataAction: fetchAcquirerOnBoardingDefaultData,
};
export default connect(mapStateToProps, mapDispatchToProps)(AcquirerOnboardRegister);