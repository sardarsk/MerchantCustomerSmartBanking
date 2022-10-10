import SoftPosBakendApi from '../../../../../../../utils/api/SoftPosApi/BackendApiList';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Modal } from 'react-responsive-modal';



const OpenDetailPopupOtherConfig = ({ acquirerDataObject,onClose }) => {
    useEffect(() => {
        fetchAllData();
    }, [])

    const [tmsMerchantCopies, setTmsMerchantCopies] = useState([]);
    const [tmsUiCustomerCopies, setTmsUiCustomerCopies] = useState([]);
    const [tmsUiReceipts, setTmsUiReceipts] = useState([]);
    const [tmsUiRefunds, setTmsUiRefunds] = useState([]);
    const [tmsUiVoid, setTmsUiVoid] = useState([]);
  const [open, setOpen] = React.useState(false);
    const fetchAllData = async () => {
        console.log(" Triggered")
        console.log(acquirerDataObject)
        if (acquirerDataObject !== undefined) {
          var Object = {
            "acquirerId": acquirerDataObject.acquirerId,
            "merchantId": acquirerDataObject.merchantId,
            "terminalId": acquirerDataObject.terminalId
          }
       
          const response = await SoftPosBakendApi.uiConfigApis.GetOtherUiConfigById(Object)
          console.log(response);
          if (response.status === 200 && response.data.statusCode === 200) {
            if (response.data.data !== null) {
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
     


    const handleClose = () => {
        setOpen(false);
        onClose();
    }

    return (
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
            <h4>Recipt</h4>
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
    )
}
export default OpenDetailPopupOtherConfig;