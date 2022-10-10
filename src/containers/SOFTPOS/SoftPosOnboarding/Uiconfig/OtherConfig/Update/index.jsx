import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';
import { useParams } from 'react-router';
import AcquirerOnBoardUpdateForm from './components/AcquirerTerminalOtherConfigUpdate'
import PropTypes from 'prop-types';

const AcquirerOnboardUpdate = () => {
  useEffect(() => {
    fetchDataById();
  }, [])
  const [isRedirect, setIsRedirect] = useState(false);
  const [data, setData] = useState();
  const { id } = useParams();
  const { id1 } = useParams();
  const { id2 } = useParams();

let Obj={}
Obj["acquirerId"] = id;
Obj["merchantId"] = id1;
Obj["terminalId"] = id2;
  const fetchDataById = async () => {
    const response = await SoftPosBakendApi.OtherUIConfigAPIs.GetOtherConfiDataById(Obj);
    if (response) {
      const tableData = {
        mapData: response && response.data.data && response.data.data.map(item => ({
          //guid: item.guid,
          acquirerId: item.tmsUiRefunds[0].acquirerId,
          merchantId:item.tmsUiRefunds[0].merchantId,
          terminalId:item.tmsUiRefunds[0].terminalId,

          
          receiptScreenReceiptTimeout:item.tmsUiReceipts[0].screenReceiptTimeout,
          receiptShowReceipt:item.tmsUiReceipts[0].showReceipt,
          receiptShowMobileNumber:item.tmsUiReceipts[0].showMobileNumber,
          receiptShowEmail :item.tmsUiReceipts[0].showEmail,
          receiptShowQr:item.tmsUiReceipts[0].showQr,
    
          customerCreditMessage:item.tmsUiCustomerCopies[0].creditMessage,
          customerDebitMessage:item.tmsUiCustomerCopies[0].debitMessage,
          customerFooterLine1:item.tmsUiCustomerCopies[0].footerLine1,
          customerFooterLine2:item.tmsUiCustomerCopies[0].footerLine2,
          customerPinEntryMessage:item.tmsUiCustomerCopies[0].pinEntryMessage,
          customerPrintRrn:item.tmsUiCustomerCopies[0].printRrn,

          merchantFooterLine1:item.tmsMerchantCopies[0].footerLine1,
          merchantFooterLine2:item.tmsMerchantCopies[0].footerLine2,
          merchantPinEntryMessage:item.tmsMerchantCopies[0].pinEntryMessage,
          merchantPrintRrn:item.tmsMerchantCopies[0].printRrn,

          voidScreenConfirmationTimeout:item.tmsUiVoid[0].screenConfirmationTimeout,
          voidAskRrn :item.tmsUiVoid[0].askRrn,
          voidAskAuthCode:item.tmsUiVoid[0].askAuthCode,
          voidShowConfirmationScreen:item.tmsUiVoid[0].showConfirmationScreen,
          
          refundScreenConfirmationTimeout:item.tmsUiRefunds[0].screenConfirmationTimeout,
          refundAskRrn :item.tmsUiRefunds[0].askRrn,
          refundAskAuthCode:item.tmsUiRefunds[0].askAuthCode,
          refundShowConfirmationScreen:item.tmsUiRefunds[0].showConfirmationScreen
          
        })),
      }
      setData(tableData);
    };
  }

  const handleSubmit = async (formValues) => {

    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    const response = await SoftPosBakendApi.OtherUIConfigAPIs.UpdateOtherConfiData(`${JSON.stringify(formValues)}`);
    debugger;
    if (response.status === 200 && response.data.statusCode === 200) {
      window.alert("Successfuly Updated UI Configuration");
      setIsRedirect(true);
    }
    else
      window.alert("Operation failed due to some reason. Please try again");

  };

  if (isRedirect) {
    return <Redirect to="/softpos/merchant/uiconfigurationOther/modify" />;
  }

  return (
    <Container>
      <AcquirerOnBoardUpdateForm onSubmit={handleSubmit} data={data} />
    </Container>
  );
};



AcquirerOnboardUpdate.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
};

AcquirerOnboardUpdate.defaultProps = {
  tableData: null,
};

export default AcquirerOnboardUpdate;