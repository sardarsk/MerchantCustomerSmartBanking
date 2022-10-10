
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Row} from 'reactstrap';
import { fetchOtherUIConfigDataForView } from '../../actions';
import OtherUIConfigTable from './components/OtherUIConfigTable';
import { Redirect } from 'react-router';

import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import OpenDetailPopupOtherConfig from './components/OpenDetailPopupOtherConfig';

const InstitutionTypeEdit = ( ) => {

  useEffect(() => {
    fetchAllData();
  }, [])

  const [openPopUp, setOpenPopUp] = useState(false);
  const [acquirerDataObject, setAcquirerDataObject] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");
  const [data, setData] = useState(null);

  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);
  }
  if (isRedirect) {
    return <Redirect to={`/softpos/merchant/uiconfigurationOther/update/${temp.acquirerId}/${temp.merchantId}/${temp.terminalId}`} />;
  }

  const onOpenDetail = (event) => {
    console.log(event);
    setAcquirerDataObject(event)
    setOpenPopUp(true);
  }

  const onClose =() => {
    setOpenPopUp(false);
  }
  const fetchAllData = async () => {
  const response = await SoftPosBakendApi.TerminalOnboardingAPIs.GetAllTerminalsData();
    const tableData = {
      mapData: response && response.data.data && response.data.data.map(item => ({
        guid: item.guid,
        acquirerId: item.merchantGuid.acquirerGuid.acquirerId,
        merchantId: item.merchantGuid.merchantId,
        terminalId: item.terminalId,
      })),
    
    };
    setData(tableData);
  }
 

  let column = [
    {
      Header: '#',
      accessor: 'id',
      disableGlobalFilter: true,
      width: 65,
    },
    {
      Header: 'Acquirer Id',
      accessor: 'acquirerId',
    },
    {
      Header: 'Merchant ',
      accessor: 'merchantId',
    },
    {
      Header: 'Terminal',
      accessor: 'terminalId',
      disableGlobalFilter: true,
    },
    {
      Header: 'Show Detail',
      accessor: 'showDetail',
      Cell: row => (
        <div>
          <Button className='primary' onClick={() => onOpenDetail(row.row.original)}>View</Button>
        </div>
      ),
    },
    {
      Header: 'Edit Detail',
      accessor: 'editDetail',
      Cell: row => (
        <div>
          <Button className='primary' onClick={() => edit(row.row.original)}>Edit</Button>
        </div>
      ),
    },
  ];
   let reactTableData2 = {};
  if (null != data && null != data.mapData) {
    reactTableData2 = { tableHeaderData: column, tableRowsData: data.mapData };
  }
  return (
    <Container>
      {
        (reactTableData2.tableRowsData != null) &&
        <Row>
          <OtherUIConfigTable reactTableData={reactTableData2} />
        </Row>
      }
      {
        (acquirerDataObject != null) && (openPopUp) &&
        <Row>
          <OpenDetailPopupOtherConfig acquirerDataObject={acquirerDataObject} onClose= {onClose} />
        </Row>
      }
    </Container>
  );

};

InstitutionTypeEdit.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

InstitutionTypeEdit.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchOtherUIConfigDataForView,
};

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionTypeEdit);
