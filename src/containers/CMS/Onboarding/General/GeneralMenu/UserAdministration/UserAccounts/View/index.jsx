import React from 'react';

import { Col, Container, Row } from 'reactstrap';
import UserAccountTableView from '../View/components/ListUserAccounts';
import CreateTableData from '../View/components/CreateDataForUserAccount';

const UserAccountView = () => {
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">List All UserAccounts</h3>
          
        </Col>
      </Row>
      <Row>
        <UserAccountTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default UserAccountView;
