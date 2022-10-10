import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import "react-responsive-modal/styles.css";
import ReactTableBase from '../../../../../../../shared/components/table/ReactTableBase';
import { useTranslation } from 'react-i18next';



const OtherUIConfigTable = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const { t } = useTranslation('common');

  const tableConfig = {
    isEditable: false,
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
          { <ReactTableBase
            name={t('instution_type.modify.name_map')}
            key={'searchable'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            tableConfig={tableConfig}
          /> } 

          {/* <Table responsive hover>
            <thead>
              <tr>
                <th >Acquirer Name</th>
                <th >Merchant Name</th>
                <th >Ternimal Id</th>
                <th>Show Detail</th>
              </tr>
            </thead>{
              <tbody>
                {reactTableData && reactTableData.tableRowsData.map(item => (
                  <tr key={item.guid}>
                    <td>{item.merchantGuid.acquirerGuid.acquirerName}</td>
                    <td>{item.merchantGuid.merchantName}</td>
                    <td>{item.terminalId}</td>
                    <td><Button className='primary' onClick={() => onOpenDetail(item)}>View</Button></td>

                  </tr>
                ))}
              </tbody>
            }
          </Table> */}

          
        </CardBody>
      </Card>
    </Col>
  );
};

OtherUIConfigTable.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default OtherUIConfigTable;
