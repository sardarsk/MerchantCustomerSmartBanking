import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';
/*
const data = [{
  name: '2021', customer: 84520, mobileusers: 100, merchants: 3480, terminals: 3480,
},
{
  name: '2020', customer: 87520, mobileusers: 200, merchants: 2200, terminals: 3480,
},
{
  name: '2019', customer: 36520, mobileusers: 300, merchants: 223250, terminals: 3480,
},
{
  name: '2018', customer: 36400, mobileusers: 250, merchants: 33400, terminals: 3480,
},
{
  name: '2017', customer: 26820, mobileusers: 80, merchants: 13330, terminals: 3480,
},
{
  name: '2016', customer: 18520, mobileusers: 11400, merchants: 8340, terminals: 3480,
},
{
  name: '2015', customer: 4990, mobileusers: 15400, merchants: 4330, terminals: 3480,
},
{
  name: '2014', customer: 8118, mobileusers: 45200, merchants: 24400, terminals: 3480,
},
{
  name: '2013', customer: 1457, mobileusers: 36600, merchants: 45250, terminals: 3480,
},
{
  name: '2012', customer: 1220, mobileusers: 21250, merchants: 15600, terminals: 3480,
},
{
  name: '2011', customer: 2448, mobileusers: 8033, merchants: 3410, terminals: 3480,
},
{
  name: '2010', customer: 1120, mobileusers: 13130, merchants: 4380, terminals: 3480,
},
{
  name: '2009', customer: 1400, mobileusers: 45655, merchants: 3430, terminals: 3480,
}];
*/
const data = [{
  name: 'sun', customer: 4520, mobileusers: 100, merchants: 340, terminals: 120,
},
{
  name: 'mon', customer: 7520, mobileusers: 200, merchants: 200, terminals: 880,
},
{
  name: 'tue', customer: 6520, mobileusers: 300, merchants: 250, terminals: 341,
},
{
  name: 'wed', customer: 3400, mobileusers: 250, merchants: 400, terminals: 548,
},
{
  name: 'thu', customer: 2680, mobileusers: 80, merchants: 330, terminals: 340,
},
{
  name: 'fri', customer: 1850, mobileusers: 1400, merchants: 340, terminals: 280,
},
{
  name: 'sat', customer: 4990, mobileusers: 5400, merchants: 433, terminals: 340,
}];

const WeeklyOnboardingRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_onboarding.weekly_onboarding')}>
      <div dir="ltr">
        <ResponsiveContainer height={200} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} merchants={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Merchants" type="monotone" dataKey="merchants" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Terminals" type="monotone" dataKey="terminals" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            <Area name="Mobile Users" type="monotone" dataKey="mobileusers" fill="#6722fd" stroke="#6722fd" fillOpacity={0.2} />
            <Area name="Customer Cards" type="monotone" dataKey="customer" fill="#cc22fd" stroke="#cc22fd" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

WeeklyOnboardingRange.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(WeeklyOnboardingRange);
