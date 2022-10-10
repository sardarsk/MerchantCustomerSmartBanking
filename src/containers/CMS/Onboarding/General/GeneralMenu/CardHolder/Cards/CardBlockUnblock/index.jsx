import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {Card, CardBody, Col, Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import CardBlockUnblockComponent from './Component/CardBlockUnblockComponent';
import { connect } from 'react-redux';
import { fetachCustomerAccountDetail } from '../actions';

const CardBlockUnblock = ({ fetchDataAction, tableData }) => {
  const [isRedirect, setIsRedirect] = useState(false);
  
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  const { t } = useTranslation('common');


  const handleSubmit = async (formValues) => {
    window.alert("Customer added successfuly!!");
  };


  if (isRedirect) {
    return <Redirect to="/onboarding/customer/register" />;
  }

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">Card Block</h3>
          {/* <h3 className="page-subhead subhead">Kiosk Functions</h3> */}
        </Col>
      </Row>
      <Row>
        {/* <Col md={{ span: 3, offset: 3 }} lg={12} xl={5}> */}
        <Col>
          <Card>
            <CardBody>
              <CardBlockUnblockComponent onSubmit={handleSubmit} />
            </CardBody>
          </Card>

        </Col>
      </Row>
    </Container>
  );
};

CardBlockUnblock.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetachCustomerAccountDetail,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardBlockUnblock);



