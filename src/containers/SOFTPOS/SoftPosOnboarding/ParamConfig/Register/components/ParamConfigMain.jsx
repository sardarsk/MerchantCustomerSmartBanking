import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';

import AppList from './AppList';
import CapK from './CapK';
import EntryPoint from './EntryPoint';
import Kernel from './Kernel';
import Rdol from './Rdol';
import Revocation from './Revocation';
import AcquirerTerminalSelection from './AcquirerTerminalSelection';
const SoftPosUiConfigMain = ({ onSubmit, selectionData }) => {
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
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>App List Param</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>CapK Param</p></div>
              <div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Entry Point Param</p></div>
              <div className={`wizard__step${page === 4 ? ' wizard__step--active' : ''}`}><p>Kernel Param</p></div>
              <div className={`wizard__step${page === 5 ? ' wizard__step--active' : ''}`}><p>Rdol Param</p></div>
              <div className={`wizard__step${page === 6 ? ' wizard__step--active' : ''}`}><p>Revocation Param</p></div>
            </div>
            <div className="wizard__form-wrapper">
              {page === 1 && (<AppList onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 2 && (<CapK previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 3 && (<EntryPoint previousPage={previousPage} onSubmit={nextPage}  selectionData={selectionData}/>)}
              {page === 4 && (<Kernel previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData} />)}
              {page === 5 && (<Rdol previousPage={previousPage} onSubmit={nextPage}  selectionData={selectionData}/>)}
              {page === 6 && (<Revocation previousPage={previousPage} onSubmit={onSubmit} selectionData={selectionData} />)}

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
