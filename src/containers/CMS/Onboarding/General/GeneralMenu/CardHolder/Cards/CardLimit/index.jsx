import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TransactionLimit from './Component/TransactionLimit';
import { connect } from 'react-redux';
import { fetachCustomerAccountDetail } from '../actions';

const CardLimit = ({ fetchDataAction, tableData }) => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  
  let data ={};
  if(tableData == null){
    data = {
      currentTransactionPerDay:5000,
      merchantTranasactionPerDay:6000,
      noOfTransactionPerDay:99,
      maximumCardLimit:50000
    }
  }

  const handleSubmit = async (formValues) => {   
        window.alert("Customer added successfuly!!" + `${JSON.stringify(formValues)}`);
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/customer/register" />;}

 return (
    <Container>
       <Row>
        <Col md={12}>
          <h3 className="page-title">Modifiy Transaction Limit</h3>
          {/* <h3 className="page-subhead subhead">Kiosk Functions</h3> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <TransactionLimit  onSubmit={handleSubmit} data={data} ></TransactionLimit>
        </Col>
      </Row>
    </Container>
  );
};
CardLimit.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetachCustomerAccountDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardLimit);


