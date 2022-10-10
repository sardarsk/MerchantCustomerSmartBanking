import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Field, reduxForm } from 'redux-form';
import {
  Card, CardBody, Col, Button, ButtonGroup, ButtonToolbar,
} from 'reactstrap';
import renderDropZoneField from '@/shared/components/form/DropZone';

const FileUploadDefault = ({ handleSubmit, reset, pristine, submitting }) => {
  const { t } = useTranslation('common');

  return (
    <Col md={12} lg={6}>
      <Card className="card--not-full-height">
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('forms.file_upload.file_upload_POI')}</h5>
          </div>
          <form className="form" onSubmit={handleSubmit}>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="poiFront" component={renderDropZoneField} />
              </div>
            </div>
          </div>
          <div className="form__POIUpload">
            <div className="form__form-group">
              <div className="form__form-group-field">
                <Field name="poiBack" component={renderDropZoneField} />
              </div>
            </div>
          </div>
          <div className="form__OnboardingButton">
            <ButtonToolbar className="form__iconButton-toolbar">
              <ButtonGroup className="btn-searchgroup--icons" dir="ltr">
                <Button outline size="sm" color="primary" type="submit" ><span className="lnr lnr-magnifier" /></Button>
                <Button outline size="sm" type="button" onClick={reset} disabled={pristine || submitting}><span className="lnr lnr-sync" /></Button>
              </ButtonGroup>
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
