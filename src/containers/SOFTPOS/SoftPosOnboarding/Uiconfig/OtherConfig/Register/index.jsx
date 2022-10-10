import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container } from 'reactstrap';
import SoftPosUiConfigMain from './components/SoftPosUiOtherConfigMain';
import { connect } from 'react-redux';
import { fetchUiConfigData } from '../../actions';
import PropTypes from 'prop-types';
import { showNotification, successNofication } from '../../../../../../shared/components/Notification';
import SoftPosBakendApi from '../../../../../../utils/api/SoftPosApi/BackendApiList';

const OtherUIConfiguration = ({ fetchDataAction, tableData }) => {
  var selectedData = [];
  const [isRedirect, setIsRedirect] = useState(false);
  useEffect(() => {
    fetchDataAction();
  }, [fetchDataAction]);
  if (null != tableData && null != tableData.mapData) {
    selectedData = tableData.mapData
  }

  const handleSubmit = async (formValues) => {
    console.log("submit form")
    window.alert(`You submitted:\n\n${JSON.stringify(formValues, null, 2)}`);
    var object = {};
    object["acquirerId"] = formValues["acquirer"]["acquirerId"];
    object["merchantId"] = formValues["merchant"]["value"];
    object["terminalId"] = formValues["terminal"]["value"];

    object["receipt"] = { 
      showReceipt: formValues["receiptShowReceipt"], 
      screenReceiptTimeout: formValues["receiptScreenReceiptTimeout"],
      showMobileNumber: formValues["receiptShowMobileNumber"],
      showEmail: formValues["receiptShowEmail"],
      showQr: formValues["receiptShowQr"] }

    object["merchantCopy"] = {
      printRrn: formValues["merchantPrintRrn"], 
      footerLine1: formValues["merchantFooterLine1"],
      footerLine2: formValues["merchantFooterLine2"],
      pinEntryMessage: formValues["merchantPinEntryMessage"]
    } 


    object["customerCopy"] = {
      printRrn: formValues["customerPrintRrn"], 
      creditMessage: formValues["customerCreditMessage"], 
      debitMessage: formValues["customerDebitMessage"], 
      footerLine1: formValues["customerFooterLine1"], 
      footerLine2: formValues["customerFooterLine2"], 
      pinEntryMessage: formValues["customerPinEntryMessage"]
    }
    object["voidStatus"] = {
      askRrn: formValues["voidAskRrn"], 
      askAuthCode: formValues["voidAskAuthCode"], 
      showConfirmationScreen: formValues["voidShowConfirmationScreen"], 
      screenConfirmationTimeout: formValues["voidScreenConfirmationTimeout"]
    }
    object["refund"] = {
      askRrn: formValues["refundAskRrn"], 
      askAuthCode: formValues["refundAskAuthCode"],
      showConfirmationScreen: formValues["refundShowConfirmationScreen"],
      screenConfirmationTimeout: formValues["refundScreenConfirmationTimeout"]
    }
    window.alert(`You submitted:\n\n${JSON.stringify(object)}`);
    const response = await SoftPosBakendApi.uiConfigApis.AddOtherUiConfigData(`${JSON.stringify(object)}`);
    if (response.status === 200 && response.data.statusCode === 200) {
        successNofication(
          "theme-light",
          "ltr",
          `SuccessCode: ${response.data.statusCode}`,
          `Message: UI Configuration added`,
        );
      window.location.reload();
    }else if(response.status === 208){
      showNotification(
        "theme-light",
        "ltr",
        `SuccessCode: ${response.data.statusCode}`,
        `Message: ${response.data.errorMessage}`,
      );
    } else
    showNotification(
      "theme-light",
      "ltr",
      `SuccessCode: ${response.data.statusCode}`,
      `Message: ${response.data.errorMessage}`,
    );
  
  };
  if (isRedirect) {
    return <Redirect to="/softpos/merchant/register/uiconf/otherConfig/register" />;
  }
  return (
    <Container>
      <SoftPosUiConfigMain onSubmit={handleSubmit}  selectionData={selectedData} />
    </Container>
  );
};


OtherUIConfiguration.propTypes = {
  fetchDataAction: PropTypes.func.isRequired,
  tableData: PropTypes.shape(),
};

OtherUIConfiguration.defaultProps = {
  tableData: null,
};


const mapStateToProps = state => ({
  tableData: state.transaction.data,
});

const mapDispatchToProps = {
  fetchDataAction: fetchUiConfigData,
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherUIConfiguration);