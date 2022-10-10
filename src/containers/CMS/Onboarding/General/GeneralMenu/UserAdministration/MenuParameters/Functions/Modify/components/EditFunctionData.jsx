import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import { useTranslation } from 'react-i18next';

const EditFunctionData = ({ reactTableData }) => {
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const { t } = useTranslation('common');

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

  const tableConfig = {
    isEditable: true,
    isSortable: true,
    isResizable: true,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 50, 100, 1000],
    placeholder: 'Search by Name...',
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <ReactTableBase
            name={"Name"}
            key={'searchable'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>
    </Col>
  );
};

EditFunctionData.propTypes = {
  reactTableData: PropTypes.shape({
    tableHeaderData: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
    })),
    tableRowsData: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
};

export default EditFunctionData;
