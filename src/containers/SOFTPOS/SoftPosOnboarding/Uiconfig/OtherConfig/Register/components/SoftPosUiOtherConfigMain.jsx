import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';


import Receipt from './Receipt';
import CustomerCopy from './CustomerCopy';
import MerchantCopy from './MerchantCopy';
import Refund from './Refund';
import Void from './Void';
import AcquirerTerminalSelection from './AcquirerTerminalSelection'

const SoftPosUiConfigMain = ({ onSubmit,selectionData }) => {
  const [page, setPage] = useState(1);
  console.log(selectionData);


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
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Acquirer</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Receipt</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Customer Copy</p></div>
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Merchant Copy</p></div>
              <div className={`wizard__step${page === 5 ? ' wizard__step--active' : ''}`}><p>Refund</p></div>
              <div className={`wizard__step${page === 6 ? ' wizard__step--active' : ''}`}><p>Void</p></div>
            </div>
            <div className="wizard__form-wrapper">
              {page === 1 && (<AcquirerTerminalSelection onSubmit={nextPage} selectionData={selectionData}   />)}
              {page === 2 && (<Receipt previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData}  />)}
              {page === 3 && (<CustomerCopy previousPage={previousPage} onSubmit={nextPage}  selectionData={selectionData} />)}
              {page === 4 && (<MerchantCopy previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData}  />)}
              {page === 5 && (<Refund previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 6 && (<Void previousPage={previousPage} onSubmit={onSubmit} selectionData={selectionData} />)}

            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

SoftPosUiConfigMain.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SoftPosUiConfigMain;
