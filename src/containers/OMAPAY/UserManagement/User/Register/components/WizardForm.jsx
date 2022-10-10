import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import SalesInfo from './SalesInfo';
import Company from './Company';
import Personal from './Personal';
import Risk from './Risk';
import Discount from './Discount';
import Settelement from './Settelement';
import Bank from './Bank';
import KYC from './KYC';

const WizardForm = ({ onSubmit }) => {
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
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Sales Order</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Company</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Personal</p></div>
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Risk</p></div>
              <div className={`wizard__step${page === 5 ? ' wizard__step--active' : ''}`}><p>Discounts</p></div>
              <div className={`wizard__step${page === 6 ? ' wizard__step--active' : ''}`}><p>Settelement</p></div>
              <div className={`wizard__step${page === 7 ? ' wizard__step--active' : ''}`}><p>Bank Details</p></div>
              <div className={`wizard__step${page === 8 ? ' wizard__step--active' : ''}`}><p>KYC</p></div>
            </div>
            <div className="wizard__form-wrapper">
              {page === 1 && <SalesInfo onSubmit={nextPage} />}
              {page === 2 && ( <Company previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 3 && ( <Personal previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 4 && ( <Risk previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 5 && ( <Discount previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 6 && ( <Settelement previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 7 && ( <Bank previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 8 && ( <KYC previousPage={previousPage} onSubmit={onSubmit} /> )}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default WizardForm;
