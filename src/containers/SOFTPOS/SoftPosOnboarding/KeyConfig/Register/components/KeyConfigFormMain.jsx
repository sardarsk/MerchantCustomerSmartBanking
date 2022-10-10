import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Col, Card, Row, CardBody,
} from 'reactstrap';
import AcquirerKeysDetails from './AcquirerKeys';
import SecurityKeysDetails from './SecurityKeys';
//import MobileKeysDetails from './MobileKeys';
 

const KeyConfigFormMain = ({ onSubmit,selectionData }) => {
  const [page, setPage] = useState(1);
  console.log("selectionData in KeyConfigFormMain");
  console.log(selectionData);
  const startPage = () => {
    setPage(1);
  };

  const nextPage = () => {
    console.log(onSubmit)
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
              <div className={`wizard__step${page === 1 ? ' wizard__step--active' : ''}`}><p>Acquirer Key Config</p></div>
              <div className={`wizard__step${page === 2 ? ' wizard__step--active' : ''}`}><p>Security Key Config</p></div>
              {/*<div className={`wizard__step${page === 3 ? ' wizard__step--active' : ''}`}><p>Mobile Key Config</p></div>*/}
              </div> 
            <div className="wizard__form-wrapper">
              {page === 1 && <AcquirerKeysDetails onSubmit={nextPage} selectionData={selectionData} />}
              {page === 2 && <SecurityKeysDetails previousPage={previousPage} onSubmit={onSubmit} selectionData={selectionData}/>
             /*{page === 2 && <SecurityKeysDetails previousPage={previousPage} onSubmit={nextPage} selectionData={selectionData}/>}
              {page === 3 && <MobileKeysDetails  previousPage={previousPage} onSubmit={onSubmit} />}  */}
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

KeyConfigFormMain.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default KeyConfigFormMain;
