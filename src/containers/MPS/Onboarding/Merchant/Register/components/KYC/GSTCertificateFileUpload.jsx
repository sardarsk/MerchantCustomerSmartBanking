import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import renderDropZoneField from '@/shared/components/form/DropZone';

const FileUploadDefault = ({ handleSubmit, reset }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card className="card--not-full-height">
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.file_upload.file_upload_GST')}</h5>
          </div>
          <form className="form" onSubmit={handleSubmit}>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="gstFront" component={renderDropZoneField} />
              </div>
            </div>
          </div>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="gstBack" component={renderDropZoneField} />
              </div>
            </div>
          </div>
          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Upload</Button>
              <Button type="reset" onClick={reset}>Clear</Button>
            </ButtonToolbar>
          </div>
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
