import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card, CardBody, Col, Row, Table
} from 'reactstrap';
import { Modal } from 'react-responsive-modal';

import ReactTableBase from '@/shared/components/table/ReactTableBase';
import { useTranslation } from 'react-i18next';
import { Redirect } from 'react-router';
import SoftPosBakendApi from '../../../../../../../utils/api/SoftPosApi/BackendApiList';

const AcqurerOnBoardTable = ({ reactTableData }) => {
  console.log("hereeee")
  const [isRedirect, setIsRedirect] = useState(false);
  const [temp, setTempData] = useState("");
  const [rows, setData] = useState(reactTableData.tableRowsData);
  const { t } = useTranslation('common');
  console.log(rows);
  const [tmsMerchantCopies, setTmsMerchantCopies] = useState([]);
  const [tmsUiCustomerCopies, setTmsUiCustomerCopies] = useState([]);
  const [tmsUiReceipts, setTmsUiReceipts] = useState([]);
  const [tmsUiRefunds, setTmsUiRefunds] = useState([]);
  const [tmsUiVoid, setTmsUiVoid] = useState([]);
  const [open, setOpen] = React.useState(false);
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
  const handleClose = () => {
    setOpen(false);
  };
  const edit = async (event) => {
    console.log(event);
    setTempData(event);
    setIsRedirect(true);

  }
  const onOpenDetail = async (event) => {

    console.log(" Triggered")
    console.log(event)
    if (event !== undefined) {
      var acquirerId = event.acquirerId;
      var merchantId = event.merchantId;
      var terminalId = event.terminalId;
      var Object = {
        "acquirerId": acquirerId,
        "merchantId": merchantId,
        "terminalId": terminalId
      }
      const response = await SoftPosBakendApi.uiConfigApis.GetOtherUiConfigById(Object)
      console.log(response);
      debugger;
      if (response.status === 200 && response.data.statusCode === 200) {
        if (response.data !== null && response.data.data !== null) {
          if (response.data.data[0].tmsUiReceipts) {
            setTmsUiReceipts(response.data.data[0].tmsUiReceipts);
          }

          if (response.data.data[0].tmsUiVoid) {
            setTmsUiVoid(response.data.data[0].tmsUiVoid);
          }

          if (response.data.data[0].tmsUiRefunds) {
            setTmsUiRefunds(response.data.data[0].tmsUiRefunds)
          }

          if (response.data.data[0].tmsUiCustomerCopies) {
            setTmsUiCustomerCopies(response.data.data[0].tmsUiCustomerCopies)
          }

          if (response.data.data[0].tmsMerchantCopies) {
            setTmsMerchantCopies(response.data.data[0].tmsMerchantCopies)
          }

          console.log(tmsUiVoid);
          setOpen(true)
        }


      } else {
        window.alert(`No Record Found`);
        // showNotification(
        //   "theme-light",
        //   "ltr",
        //   `SuccessCode: ${response.data.statusCode}`,
        //   `Message: ${response.data.errorMessage}`,
        // );
      }

    }
  }

  if (isRedirect) {
    return <Redirect to={`/softpos/merchant/uiconfigurationOther/update/${temp.acquirerId}/${temp.merchantId}/${temp.terminalId}`} />;
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
              <h3 className="page-title">UI Configration Details</h3>

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
                <th >Acquirer Id</th>
                <th >Merchant Id</th>
                <th >Terminal Id</th>
                <th>Show Details</th>
                <th>Edit</th>
              </tr>
            </thead>{
              <tbody>
                {reactTableData && reactTableData.tableRowsData.map(item => (
                  <tr key={item.guid}>
                    <td>{item.acquirerId}</td>
                    <td>{item.merchantId}</td>
                    <td>{item.terminalId}</td>
                    <td><Button className='primary' onClick={() => onOpenDetail(item)}>View</Button></td>

                    <td><Button className='primary' onClick={() => edit(item)}  >Edit</Button></td>

                  </tr>
                ))}
              </tbody>
            }
          </Table>

          <Modal
            open={open}
            onClose={handleClose}
          >
            <div >

              <div>
                <h4>Merchant Copy</h4>
                {tmsMerchantCopies &&
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th >footerLine1</th>
                        <th >footerLine2</th>
                        <th >printRrn</th>
                        <th>pinEntryMessage</th>
                      </tr>
                    </thead>{
                      <tbody>
                        {tmsMerchantCopies && tmsMerchantCopies.map(item => (
                          <tr key={item.guid}>
                            <td>{item.footerLine1}</td>
                            <td>{item.footerLine2}</td>
                            <td>{item.printRrn === true ? 'True' : 'False'} </td>
                            <td>{item.pinEntryMessage}</td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </Table>
                }
              </div>

              <div>
                <h4>Customer Copy</h4>
                {tmsUiCustomerCopies &&
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th >footerLine1</th>
                        <th >footerLine2</th>
                        <th >printRrn</th>
                        <th >creditMessage</th>
                        <th >debitMessage</th>
                        <th>pinEntryMessage</th>
                      </tr>
                    </thead>{
                      <tbody>
                        {tmsUiCustomerCopies && tmsUiCustomerCopies.map(item => (
                          <tr key={item.guid}>
                            <td>{item.footerLine1}</td>
                            <td>{item.footerLine2}</td>
                            <td>{item.printRrn === true ? 'Yes' : 'No'}</td>
                            <td>{item.creditMessage}</td>
                            <td>{item.debitMessage}</td>
                            <td>{item.pinEntryMessage}</td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </Table>
                }
              </div>

              <div>
                <h4>Receipt</h4>
                {tmsUiReceipts &&
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th >showQr</th>
                        <th >showReceipt</th>
                        <th >showMobileNumber</th>
                        <th >showEmail</th>
                        <th >screenReceiptTimeout</th>
                      </tr>
                    </thead>{
                      <tbody>
                        {tmsUiReceipts && tmsUiReceipts.map(item => (
                          <tr key={item.guid}>
                            <td>{item.showQr === true ? 'Yes' : 'No'} </td>
                            <td>{item.showReceipt === true ? 'Yes' : 'No'}</td>
                            <td>{item.showMobileNumber === true ? 'Yes' : 'No'}</td>
                            <td>{item.showEmail === true ? 'Yes' : 'No'}</td>
                            <td>{item.screenReceiptTimeout}</td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </Table>
                }
              </div>

              <div>
                <h4>Refunds</h4>
                {tmsUiRefunds &&
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th >askRrn</th>
                        <th >askAuthCode</th>
                        <th >showConfirmationScreen</th>
                        <th >screenConfirmationTimeout</th>
                      </tr>
                    </thead>{
                      <tbody>
                        {tmsUiRefunds && tmsUiRefunds.map(item => (
                          <tr key={item.guid}>
                            <td>{item.askRrn === true ? 'Yes' : 'No'}</td>
                            <td>{item.askAuthCode === true ? 'Yes' : 'No'} </td>
                            <td>{item.showConfirmationScreen === true ? 'Yes' : 'No'}</td>
                            <td>{item.screenConfirmationTimeout}</td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </Table>
                }
              </div>

              <div>
                <h4>Void</h4>
                {tmsUiVoid &&
                  <Table responsive hover>
                    <thead>
                      <tr>
                        <th >askRrn</th>
                        <th >askAuthCode</th>
                        <th >showConfirmationScreen</th>
                        <th >screenConfirmationTimeout</th>
                      </tr>
                    </thead>{
                      <tbody>
                        {tmsUiVoid && tmsUiVoid.map(item => (
                          <tr key={item.guid}>
                            <td>{item.askRrn === true ? 'Yes' : 'No'}</td>
                            <td>{item.askAuthCode === true ? 'Yes' : 'No'}</td>
                            <td>{item.showConfirmationScreen === true ? 'Yes' : 'No'}</td>
                            <td>{item.screenConfirmationTimeout}</td>
                          </tr>
                        ))}
                      </tbody>
                    }
                  </Table>
                }
              </div>


            </div>
          </Modal>


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
