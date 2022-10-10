
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Container, Row } from 'reactstrap';
import { fetchThemeSliderConfigForView } from '../../actions';
import ThemeSliderConfigTable from './components/ThemeSliderConfigTable';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import OpenDetailPopup from './components/OpenDetailPopup';
import { Redirect } from 'react-router';

const ThemeSliderConfigView = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const [acquirerDataObject, setAcquirerDataObject] = useState(null);
  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");
  useEffect(() => {
    fetchAllData();
  }, [])
  const [data, setData] = useState(null);

 
  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);
  }
  if (isRedirect) {
    console.log("acquirerId is " + temp)
    return <Redirect to={`/softpos/merchant/uiconfigurationtheme/update/${temp.acquirerId}`} />;
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
    const response = await SoftPosBakendApi.uiConfigApis.GetAllThemeConfigAcquirer();
    const tableData = {
      mapData: response && response.data.data && response.data.data,
    };
    setData(tableData)
  }
  let reactTableData2 = {};
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
  if (null != data && null != data.mapData) {
    reactTableData2 = { tableHeaderData: column, tableRowsData: data.mapData };
  }

  return (
    <Container>

      {
        (reactTableData2.tableRowsData != null) &&
        <Row>
          <ThemeSliderConfigTable reactTableData={reactTableData2} />
        </Row>
      }
      {
        (acquirerDataObject != null) && (openPopUp) &&
        <Row>
          <OpenDetailPopup acquirerDataObject={acquirerDataObject} onClose= {onClose} />
        </Row>
      }
    </Container>
  );

};

ThemeSliderConfigView.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

ThemeSliderConfigView.defaultProps = {
  tableData: null,
};

const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchThemeSliderConfigForView,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSliderConfigView);
