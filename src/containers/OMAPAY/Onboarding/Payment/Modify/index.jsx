import React from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Container, Row } from 'reactstrap';
import EditableReactTable from './components/InstitutionTypeTable';
import CreateTableData from '../CreateData';
import api from '../../../../../utils/api/omapay/apiClient';


const InstitutionTypeEdit = () => {
  const { t } = useTranslation('common');
  //const [rows, setData] = useState(reactTableData.tableRowsData);
  //const [rows, setData] = useState([]);
  //const getHeader = GetHeader();
  //const newData = GetNewData();
  //const reactTableData = CreateTableData();
  return (
    <Container>
      <Row>
        <Col md={12}>
        <h3 className="page-title">Acquirer Rule Authorizations</h3>
          <h3 className="page-subhead subhead">List of all Acquirer Authorization Rules</h3>
        </Col>
      </Row>
     
    </Container>
  );
};

export default InstitutionTypeEdit;
