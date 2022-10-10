import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col,Row,Table,Button
} from 'reactstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import { Redirect } from 'react-router';

const InstitutionTypeTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);

  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");

  const updateEditableData = (rowIndex, columnId, value) => {
    setData(old => old.map((item, index) => {
      if (index === rowIndex) {
        return {
          ...old[rowIndex],
          [columnId]: value,
        };
      }
      return item;
    }));
  };
  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);

  }

  
  if (isRedirect) {
    return <Redirect to={`/softpos/merchant/paramconf/applist/update/${temp.guid}`} />;
  }
  const tableConfig = {
    isEditable: true,
    isSortable: true,
    isResizable: true,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 50, 100, 1000],
    placeholder: 'Search by First name...',
  };

  return (

    <Col md={12} lg={12}>
      <Card>
        <CardBody>
        <Row>
        <Col md={12}>
          <h3 className="page-title">Edit - App List Parameters</h3>
         </Col>
      </Row>
        { /* <ReactTableBase
            name="{t('instution_type.modify.name_map')}"
            key={'searchable'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig} 
  />*/}
   <Table responsive hover>
            <thead>
              <tr>
                {/* {reactTableData.tableHeaderData.map(item => (
                  <th key={item.accessor}>{item.accessor}</th>
                ))} */}

                <th >Aid</th>
                <th >Kernel Id</th>
                <th >Transaction Type</th>
                </tr>
            </thead>{
              <tbody>
                {reactTableData &&  reactTableData.tableRowsData.map(item => (
                  <tr key={item.id}>
                    <td>{item.aid}</td>
                    <td>{item.kernel_id}</td>
                    <td>{item.transaction_type}</td>
                    <td><Button className='primary'  onClick={() => edit(item)}  >Edit</Button></td>

                  </tr>
                ))}
              </tbody>
            }
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

InstitutionTypeTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default InstitutionTypeTable;
