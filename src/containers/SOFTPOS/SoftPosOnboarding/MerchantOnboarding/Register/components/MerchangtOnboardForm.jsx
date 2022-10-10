import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import MerDetails from './MerchantDetails';
import Company from './MerchantReceiptDetails';


const MerchangtOnboardForm = ({ onSubmit }) => {
  const [page, setPage] = useState(1);

  const startPage = () => {
    setPage(1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Row>
      <Col md={12} lg={12}>
        <Card>
          <CardBody className="wizard">
            <div className="wizard__steps">
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Merchant Details</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Merchant Receipt</p></div>
              </div> 
            <div className="wizard__form-wrapper">
              {page === 1 && <MerDetails onSubmit={nextPage} />}
              {page === 2 && ( <Company previousPage={previousPage} /> )}
                     
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

MerchangtOnboardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default MerchangtOnboardForm;
