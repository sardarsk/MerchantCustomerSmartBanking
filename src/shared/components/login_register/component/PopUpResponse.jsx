import PropTypes from 'prop-types';
import React from 'react';
import { reduxForm } from 'redux-form';
import validate from './validate';
import { Modal } from 'react-responsive-modal';

//const LoginRegisterForm = ({  data,form }) => {

const PopUpResponse = props => {
  const { onClose, handleSubmit, data, pristine, reset, submitting } = props;
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className="modal-dialog--primary modal-dialog--carousel"
    >
<br>
</br>
      <h2><font color="#006699">User is Already Exisited.Please try with new user</font></h2>
    </Modal>
  )
};


PopUpResponse.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
};


export default reduxForm({
  form: 'popUpForm', // a unique identifier for this form
  validate
})(PopUpResponse);
