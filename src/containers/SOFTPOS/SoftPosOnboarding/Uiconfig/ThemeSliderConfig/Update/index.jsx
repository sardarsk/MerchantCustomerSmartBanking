import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';

import { Redirect, useParams } from 'react-router';
import PropTypes from 'prop-types';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import ThemeSliderUpdateForm from './components/ThemeSliderUpdateForm';
// import SoftPosUiConfigMain from './components/SoftPosUiConfigMain';

const ThemeSliderConfigUpdate = () => {
  useEffect(() => {
    fetchDataById();
  }, []);
  const [isRedirect, setIsRedirect] = useState(false);
  const [data, setData] = useState(null);
  const [allAcquirer, setAcquirer] = useState(null);
  console.log("here in ThemeSliderConfigUpdate")
  var selectedData = [];

  const { id } = useParams();

  var objectData = {
    "acquirerId": id,
  }
  const fetchDataById = async () => {
    console.log("heree")
    const response = await SoftPosBakendApi.uiConfigApis.GetThemeUiConfigById(objectData);
    if (response) {
      console.log(response.data.map);
      setData(response.data.map);
    };
    // const response2 = await SoftPosBakendApi.uiConfigApis.GetAllAcquirerDefinition();
    // if (response2) {
    //   console.log(response2.data.data);

    //   setAcquirer(response2.data.data);
    // };
  }
  const handleSubmit = async (formValues) => {
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);

    var object = {};
    object["acquirerId"]=formValues["acquirerDefinition"]["value"];
    object["materialThemeTwo"]=formValues;
    object["imageSlider"]=formValues["imageSlider"]
    console.log(object);
    console.log("api call");

    const response = await SoftPosBakendApi.uiConfigApis.UpdateThemeSliderConfig(object);
    if (response.status === 200 && response.data.statusCode === 200) {
      window.alert("Successfuly added new Acquirer");
      setIsRedirect(true);
    }
    else
      window.alert("Operation Failed due to some reason. Please try again");
  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/uiconfigurationtheme/view" />;
  }

  return (
    <Container>
      <ThemeSliderUpdateForm onSubmit={handleSubmit} selectionData={selectedData} data={data} />
    </Container>
  );
};


// ThemeSliderConfigUpdate.propTypes = {
//   fetchDataAction: PropTypes.func.isRequired,
// };

// ThemeSliderConfigUpdate.defaultProps = {
//   tableData: null,
// };

export default ThemeSliderConfigUpdate;