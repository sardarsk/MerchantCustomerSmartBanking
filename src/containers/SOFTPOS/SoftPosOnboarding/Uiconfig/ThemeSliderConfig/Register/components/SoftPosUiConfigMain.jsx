import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';

import ThemeTwo from './ThemeTwo';
import ThemeThree from './ThemeThree';
import ImageSlider from './ImageSlider';
import AcquirerTerminalSelection from './AcquirerSelection'

const SoftPosUiConfigMain = ({ onSubmit,selectionData }) => {
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
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Image Slider</p></div>

            </div>  
            <div className="wizard__form-wrapper">
              {page === 1 && (<AcquirerTerminalSelection onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 2 && (<ThemeTwo previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData}  />)}
              {page === 3 && (<ThemeThree previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 4 && ( <ImageSlider previousPage={previousPage} onSubmit={onSubmit} selectionData={selectionData} /> )}
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
