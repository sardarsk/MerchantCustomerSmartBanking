import EditableReactTable from './components/InstitutionTypeTableView';
import CreateTableData from '../../CreateData';
import { fetchTableData } from '../../actions';
import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


import { Container, Row} from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import { Redirect } from 'react-router';

const InstitutionTypeEdit = ({ fetchDataAction, tableData }) => {

  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  let reactTableData2 = {};
  const [isRedirect, setIsRedirect] = useState(false);
  if(null != tableData && null != tableData.mapData){
    reactTableData2 = { tableHeaderData: CreateTableData().tableHeaderData, tableRowsData: tableData.mapData };
  }
  ///softpos/merchant/merchant/merDetails/update/
  const handleSubmit = async (formValues) => {
    // window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
     const response = await SoftPosBakendApi.MerchantOnboardingAPI.UpdateMerchantData(formValues);
     if (response.status === 200 && response.data.statusCode === 200) {
       window.alert("Successfuly updated Acquirer");
       setIsRedirect(true);
     }
     else
       window.alert("Operation Failed due to some reason. Please try again");
 
   };
 
   if (isRedirect) {
     return <Redirect to="/softpos/merchant/merchant/merDetails/view" />;
   }
   return (
    <Container>
      
      {
       (reactTableData2.tableRowsData != null) &&
      <Row>
        <EditableReactTable reactTableData={reactTableData2} />
      </Row>
      }
    </Container>
  );

};

InstitutionTypeEdit.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

InstitutionTypeEdit.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchTableData,
};

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionTypeEdit);
