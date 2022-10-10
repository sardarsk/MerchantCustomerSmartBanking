import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReissueCardComponent from './Component/ReissueCardComponent';

const ReIssueCard = () => {
  const [isRedirect, setIsRedirect] = useState(false);
  const { t } = useTranslation('common');

  const handleSubmit = async (formValues) => {   
        window.alert("Customer added successfuly!!");
  };

  if (isRedirect) {
    return <Redirect to="/onboarding/customer/register" />;}

 return (
    <Container>
        <Row>
        <Col md={12}>
          <h3 className="page-title">Re-Issue Card</h3>
          {/* <h3 className="page-subhead subhead">Kiosk Functions</h3> */}
        </Col>
      </Row>
      <Row>
        <Col>
          <ReissueCardComponent  onSubmit={handleSubmit} ></ReissueCardComponent>
        </Col>
      </Row>
    </Container>
  );
};

ReIssueCard.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ReIssueCard;
