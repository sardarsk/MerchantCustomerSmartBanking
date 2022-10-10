import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';

import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderDropZoneField from '@/shared/components/form/DropZone';

const FileUploadDefault = ({ handlereset,getFile }) => {
  const { t } = useTranslation('common');
  const [files, setFiles] = useState("");

  const handleSubmit = (event) => {
    console.log("");
    alert("hey inside file call");
    const fileObject = event.target.files[0].name;
    if (!fileObject) return;
    setFiles(fileObject);
    getFile(fileObject);
  };


  
  return (
    <Col md={12} lg={6}>
      <Card className="card--not-full-height">
        <CardBody>
          <div className="card__title">
            
            <h5 className="bold-text">{t('uploadKycFiles.cardKyc')}</h5>
          </div>
          <form className="form" onSubmit={handleSubmit}>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="poaFront"  type="file" component={renderDropZoneField} />
              </div>
            </div>
          </div>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="poaBack"  type="file"  component={renderDropZoneField} />
              </div>
            </div>
          </div>
          {/* <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Upload</Button>
              <Button type="reset" onClick={reset}>Clear</Button>
            </ButtonToolbar>
          </div> */}
          </form>
        </CardBody>
      </Card>
    </Col>
    
  );
};

FileUploadDefault.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'file_upload_default', // a unique identifier for this form
})(FileUploadDefault);
