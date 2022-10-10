import React from 'react';
import { Route, Switch } from 'react-router-dom';
import InstititionTypeForm from '../../../MPS/ConfigGeneral/InstitutionType/Register/index';
import InstitutionTypeEdit from '../../../MPS/ConfigGeneral/InstitutionType/Modify/index';
import InstitutionTypeView from '../../../MPS/ConfigGeneral/InstitutionType/View/index';

export default () => (
  <Switch>
    <Route path="/config/general_config/institution_type_register" component={InstititionTypeForm} />
    <Route path="/config/general_config/institution_type_modify" component={InstitutionTypeEdit} />
    <Route path="/config/general_config/institution_type_view" component={InstitutionTypeView} />
  </Switch>
);
