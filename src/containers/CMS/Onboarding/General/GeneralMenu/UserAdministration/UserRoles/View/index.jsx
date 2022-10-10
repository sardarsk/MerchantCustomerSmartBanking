import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import UserRoleTableView from '../View/components/ListUserRoles';
import CreateTableData from '../View/components/CreateDataForUserRole';

const UserRoleView = () => {
  const { t } = useTranslation('common');
  const reactTableData = CreateTableData();

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">List All UserRoles</h3>
          
        </Col>
      </Row>
      <Row>
        <UserRoleTableView reactTableData={reactTableData} />
      </Row>
    </Container>
  );
};

export default UserRoleView;
