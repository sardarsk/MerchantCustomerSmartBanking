import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddConfig from '../../../DELINQUENT/Config/Register/DelinquencyCriteria';
import AddCollectionAgent from '../../../DELINQUENT/Config/Register/CollectionAgent';
import ConfigModify from '../../../DELINQUENT/Config/Modify/index';
import ConfigView from '../../../DELINQUENT/Config/View/index';
import AddBucketCreation from '../../../DELINQUENT/Config/Register/BucketCreation';

export default () => (
  <Switch>
      <Route path="/creditCollection/config/DelinquencyCriteria" component={AddConfig} />
      <Route path="/creditCollection/config/CollectionAgent" component={AddCollectionAgent} />
      <Route path="/creditCollection/config/BucketCreation" component={AddBucketCreation} />
      <Route path="/creditCollection/config/modify" component={ConfigModify} />
      <Route path="/creditCollection/config/view" component={ConfigView} />
      
  </Switch>
);
