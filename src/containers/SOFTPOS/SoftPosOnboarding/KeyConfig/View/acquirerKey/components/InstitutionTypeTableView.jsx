import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col,
} from 'reactstrap';
import ReactTableBase from '@/shared/components/table/ReactTableBase';
import { useTranslation } from 'react-i18next';
import renderSelectField from '@/shared/components/form/Select';
import { Field } from 'redux-form';

const InstitutionTypeTable = ({ reactTableData }) => {
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
    isEditable: false,
    isSortable: true,
    isResizable: true,
    withPagination: true,
    withSearchEngine: true,
    manualPageSize: [10, 50, 100, 1000],
    placeholder: 'Search by First name...',
  };

  return (
    
    
      <Card>
      <CardBody>
     
        </CardBody>
        <CardBody>
       
          <ReactTableBase
            name={t('instution_type.modify.name_map')}
            key={'searchable'}
            columns={reactTableData.tableHeaderData}
            data={rows}
            updateEditableData={updateEditableData}
            tableConfig={tableConfig}
          />
        </CardBody>
      </Card>

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
