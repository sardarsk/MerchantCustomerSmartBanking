//import EditableReactTable from './components/InstitutionTypeTableView';

import { fetchParamConfigDataForView } from './actions';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Col, Container, Row, Card, CardBody, Table } from 'reactstrap';
import { Modal } from 'react-responsive-modal';
import React, { useState } from 'react';
import {
  Button,
} from 'reactstrap';
import SoftPosBakendApi from '../../../../../utils/api/SoftPosApi/BackendApiList';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
          width: 1000,
        },
   });

const InstitutionTypeEdit = ({ fetchDataAction, tableData }) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  var data = {};
  debugger;
  const [entryPoints, setEntryPoints] = useState([]);
  const [appList, setAppList] = useState([]);
  const [capk, setCapk] = useState([]);
  const [kernels, setKernels] = useState([]);
  const [rdol, setRdol] = useState([]);
  const [revocation, setRevocation] = useState([]);

  const onOpenDetail = async () => {
  
    const response = await SoftPosBakendApi.paramConfigApis.GetAllParamConfig();
    console.log(response);
    if (response.status === 200 && response.data.statusCode === 200) {
      if (response.data.map !== null) {
       { if (response.data.map.kernels) {
          setKernels(response.data.map.kernels);
        }

        if (response.data.map.rdol) {
          setRdol(response.data.map.rdol);
        }

        if (response.data.map.capk) {
          setCapk(response.data.map.capk);
        }

        if (response.data.map.appList) {
          setAppList(response.data.map.appList);
        }
         if (response.data.map) {
          setRevocation(response.data.map.revocation);

        }
      }
       // let reactTableData2 = {};
   
          if (null != response.data.map.entryPoints) {
          setEntryPoints(response.data.map.entryPoints);
            //reactTableData2 = { tableHeaderData: CreateTableData().tableHeaderData, tableRowsData: response.data.map.entryPoints };
          }
       
       
        setOpen(true)
      }
    } else {
      window.alert(`No Record Found`);
    }


  }
 
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">View - Param Config</h3>
        </Col>
      </Row>
      <Row>
        <Card>
          <CardBody>
            <Col md={12}>
              <Button className='primary' onClick={() => onOpenDetail()}>View Details</Button>
            </Col>
          </CardBody>
        </Card>
      </Row>
      {
        <Modal className={useStyles().root}
          open={open}
          onClose={handleClose}
        >
     
          <Container>
                <Row>
                  <Col md={12}>
                    <h3 className="page-title">Entry Point</h3>
                  </Col>
                </Row>
             {/*   {
                  (reactTableData2.tableRowsData != null) &&
                  <Row>
                    <EditableReactTable reactTableData={reactTableData2} />
                  </Row>
                }*/}
              </Container>
              <div>
             {entryPoints &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>aid</th>
                      <th>kernel_id</th>
                      <th>transaction_type</th>
                      <th>tag_data</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {entryPoints && entryPoints.map(item => (
                        <tr>
                          <td>{item.aid}</td>
                          <td >{item.kernel_id}</td>
                          <td>{item.transaction_type} </td>
                          <td>{item.tag_data}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>
            <div>
              <h4>App List</h4>
              {appList &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th >aid</th>
                      <th >kernel_id</th>
                      <th >transaction_type</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {appList && appList.map(item => (
                        <tr>
                          <td>{item.aid}</td>
                          <td>{item.kernel_id}</td>
                          <td>{item.transaction_type}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>
            <div>
              <h4>CapK</h4>
              {capk &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th >rid</th>
                      <th >index</th>
                      <th >explen</th>
                      <th >exponent</th>
                      <th >keylen</th>
                      <th>modulus</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {capk && capk.map(item => (
                        <tr>
                          <td >{item.rid}</td>
                          <td>{item.index}</td>
                          <td>{item.explen}</td>
                          <td>{item.exponent}</td>
                          <td>{item.keylen}</td>
                          <td>{item.modulus}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>

            <div>
              <h4>Kernels</h4>
              {kernels &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>kernel_id</th>
                      <th>aid</th>
                      <th>transaction_type</th>
                      <th>tag_data</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {kernels && kernels.map(item => (
                        <tr>
                          <td>{item.kernel_id}</td>
                          <td>{item.aid}</td>
                          <td>{item.transaction_type}</td>
                          <td>{item.tag_data}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>
            <div>
              <h4>Rdol</h4>
              {rdol &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>mode</th>
                      <th>rdol_data</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {rdol && rdol.map(item => (
                        <tr>
                          <td>{item.mode}</td>
                          <td>{item.rdol_data}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>

            <div>
              <h4>Revocation</h4>
              {revocation &&
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>rid</th>
                      <th>pk_index</th>
                      <th>cert_serial</th>
                    </tr>
                  </thead>{
                    <tbody>
                      {revocation && revocation.map(item => (
                        <tr>
                          <td>{item.rid}</td>
                          <td>{item.pk_index}</td>
                          <td>{item.cert_serial}</td>
                        </tr>
                      ))}
                    </tbody>
                  }
                </Table>
              }
            </div>
            
        
        </Modal>
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
  fetchDataAction: fetchParamConfigDataForView,
};

export default connect(mapStateToProps, mapDispatchToProps)(InstitutionTypeEdit);
