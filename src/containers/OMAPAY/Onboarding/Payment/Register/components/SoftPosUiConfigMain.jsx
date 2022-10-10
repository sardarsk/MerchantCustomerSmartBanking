import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';


import ThemeTwo from './ThemeTwo';
import ThemeThree from './ThemeThree';
import Receipt from './Receipt';
import CustomerCopy from './CustomerCopy';
import MerchantCopy from './MerchantCopy';
import ImageSlider from './ImageSlider';
import Refund from './Refund';
import Void from './Void';
import AcquirerTerminalSelection from './AcquirerTerminalSelection'



const SoftPosUiConfigMain = ({ onSubmit }) => {
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
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Acquirer</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Theme Two</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Theme Three</p></div>
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Receipt</p></div>
              <div className={`wizard__step${page === 5 ? ' wizard__step--active' : ''}`}><p>Customer Copy</p></div>
              <div className={`wizard__step${page === 6 ? ' wizard__step--active' : ''}`}><p>Merchant Copy</p></div>
              <div className={`wizard__step${page === 7 ? ' wizard__step--active' : ''}`}><p>Image Slider</p></div>
              <div className={`wizard__step${page === 8 ? ' wizard__step--active' : ''}`}><p>Refund</p></div>
              <div className={`wizard__step${page === 9 ? ' wizard__step--active' : ''}`}><p>Void</p></div>
            </div>  
            <div className="wizard__form-wrapper">
              {page === 1 && (<AcquirerTerminalSelection onSubmit={nextPage} />)}
              {page === 2 && (<ThemeTwo previousPage={previousPage} onSubmit={nextPage} />)}
              {page === 3 && (<ThemeThree previousPage={previousPage} onSubmit={nextPage} />)}
              {page === 4 && ( <Receipt previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 5 && ( <CustomerCopy previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 6 && ( <MerchantCopy previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 7 && ( <ImageSlider previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 8 && ( <Refund previousPage={previousPage} onSubmit={nextPage} /> )}
              {page === 9 && ( <Void previousPage={previousPage} onSubmit={nextPage} /> )}
              
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
