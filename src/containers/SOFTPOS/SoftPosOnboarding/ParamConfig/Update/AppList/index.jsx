import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import { useParams } from 'react-router';
import AppListUpdateForm from './components/AppListUpdateForm';
import PropTypes from 'prop-types';

const AcquirerOnboardUpdate = () => {
  useEffect(() => {
    fetchDataById();
  }, [])
  const [isRedirect, setIsRedirect] = useState(false);
  const [data, setData] = useState();
  const { id } = useParams();

  const fetchDataById = async () => {
    const response = await SoftPosBakendApi.acquirerApisView.GetAcquirerById(id);
    if (response) {
      const tableData = {
        mapData: response && response.data.data && response.data.data.map(item => ({
          guid: item.guid,
          acquirerId: item.acquirerId,
          acquirerCode: item.acquirerCode,
          acquirerName: item.acquirerName,
          description: item.description,
          address: item.address,
          contactNo: item.contactNo,
          emailId: item.emailId,
          country: item.tmsMasterCountry,
          currency: item.tmsMasterCurrency,
        })),
      }
      setData(tableData);
    };
  }

  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    const response = await SoftPosBakendApi.acquirerApisView.UpdateAcquirerData(formValues);
    if (response.status === 200 && response.data.statusCode === 200) {
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
      <AppListUpdateForm onSubmit={handleSubmit} data={data} />
    </Container>
  );
};
// const mapDispatchToProps = {
//   fetchDataAction: fetchDataBiId("1"),
// };


AppListUpdateForm.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
};

AppListUpdateForm.defaultProps = {
  tableData: null,
};

export default AppListUpdateForm;