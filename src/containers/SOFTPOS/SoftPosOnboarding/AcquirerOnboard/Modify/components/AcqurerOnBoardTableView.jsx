import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardBody, Col, Row, Table
} from 'reactstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router';

const AcqurerOnBoardTable  = ({ reactTableData }) => {
  console.log("hereeee")
  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const { t } = useTranslation('common');
  console.log(rows);
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
    return <Redirect to={`/softpos/merchant/institution/update/${temp.guid}`} />;
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
              <h3 className="page-title">Edit - Acquirer Details</h3>

            </Col>
          </Row>
          {/* <ReactTableBase
            name={t('instution_type.modify.name_map')}
            key={'searchable'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig}
          /> */}

          <Table responsive hover>
            <thead>
              <tr>
                {/* {reactTableData.tableHeaderData.map(item => (
                  <th key={item.accessor}>{item.accessor}</th>
                ))} */}


                <th >Acquirer Id</th>
                <th >Acquirer Code</th>
                <th >Acquirer Name</th>
                <th>Acquirer Description</th>
                <th>Address</th>
                <th>Contact Number</th>
                <th>Email Id</th>
                <th>Country</th>
                <th>Currency</th>
                <th>Action</th>
                </tr>
            </thead>{
              <tbody>
                {reactTableData &&  reactTableData.tableRowsData.map(item => (
                  <tr key={item.guid}>
                    <td>{item.acquirerId}</td>
                    <td>{item.acquirerCode}</td>
                    <td>{item.acquirerName}</td>
                    <td>{item.description}</td>
                    <td>{item.address}</td>
                    <td>{item.contactNo}</td>
                    <td>{item.emailId}</td>
                    <td>{item.country}</td>
                    <td>{item.currency}</td>
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

AcqurerOnBoardTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default AcqurerOnBoardTable;
