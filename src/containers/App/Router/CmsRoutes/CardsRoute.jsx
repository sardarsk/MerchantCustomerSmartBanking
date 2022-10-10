import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardBlockUnblock from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards/CardBlockUnblock';
import CardLimit from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards/CardLimit';
import ReIssueCard from '../../../CMS/Onboarding/General/GeneralMenu/CardHolder/Cards/ReIssueCard';
export default () => (
  <Switch>
    <Route path="/cms/generalMenu/cards/transaction-limit" component={CardLimit} />
    <Route path="/cms/generalMenu/cards/block-unblock-card" component={CardBlockUnblock} />
    <Route path="/cms/generalMenu/cards/reissue-card" component={ReIssueCard} />
  </Switch>
);
