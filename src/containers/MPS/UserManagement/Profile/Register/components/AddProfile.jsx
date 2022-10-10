import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import { Card, CardBody, Button, ButtonToolbar } from 'reactstrap';
import CheckboxTree from 'react-checkbox-tree';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import validate from './validate';
import SimpleTreeContainer from './SimpleTreeContainer';

const AddProfileForm = ({ handleSubmit, reset, pristine, submitting }) => {
  const [profile, setProfileState] = useState({
    checked: [
        'persian',
        'spqr',
        'byzantine',
        'holy-roman',
        'inca',
    ],
    expanded: [
        'favorite-empires',
        'classical-era',
        'medieval-era',
    ],
  });

  const nodes = [
    {
        value: 'Documents',
        label: 'Documents',
        children: [
            {
                value: 'Employee Evaluations.zip',
                label: 'Employee Evaluations.zip',
                icon: <i className="far fa-file-archive" />,
            },
            {
                value: 'Expense Report.pdf',
                label: 'Expense Report.pdf',
                icon: <i className="far fa-file-pdf" />,
            },
            {
                value: 'notes.txt',
                label: 'notes.txt',
                icon: <i className="far fa-file-alt" />,
            },
        ],
    },
    {
        value: 'Photos',
        label: 'Photos',
        children: [
            {
                value: 'nyan-cat.gif',
                label: 'nyan-cat.gif',
                icon: <i className="far fa-file-image" />,
            },
            {
                value: 'SpaceX Falcon9 liftoff.jpg',
                label: 'SpaceX Falcon9 liftoff.jpg',
                icon: <i className="far fa-file-image" />,
            },
        ],
    },
];
  
  return (
    
    <Card>
      <div className="ATM-form__checkbox-tree">
        <CheckboxTree
                  nodes={nodes}
                  checked={profile.checked}
                  expanded={profile.expanded}
                  onCheck={checked => setProfileState({ checked })}
                  onExpand={expanded => setProfileState({ expanded })}
                  showExpandAll
                  iconsClass="fa5"
              />
      </div>
    <CardBody>
    <div >

    <h3 className="wizard__title">Adding Profile</h3></div>
    <form className="form" onSubmit={handleSubmit}>
      {/* Two row */} 


      <div className="ATM-form__Button">
      <ButtonToolbar className="ATM-form__button-toolbar wizard__toolbar">
        <Button color="primary" type="submit">Submit</Button>
        <Button type="button" onClick={reset} disabled={pristine || submitting}>
            Cancel
        </Button>
      </ButtonToolbar>
      </div>
    </form>

    </CardBody>
    </Card>
  );
};

AddProfileForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form_validation', // a unique identifier for this form
  validate,
})(AddProfileForm);