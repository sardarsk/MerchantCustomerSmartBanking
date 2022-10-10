import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data = [{
  name: 'Mon', success: 590, declined: 100, reversed: 80,
},
{
  name: 'Tue', success: 868, declined: 200, reversed: 200,
},
{
  name: 'Wed', success: 1397, declined: 300, reversed: 250,
},
{
  name: 'Thu', success: 1480, declined: 250, reversed: 100,
},
{
  name: 'Fri', success: 1520, declined: 80, reversed: 10,
},
{
  name: 'Sat', success: 1520, declined: 130, reversed: 80,
},
{
  name: 'Sun', success: 1400, declined: 55, reversed: 30,
}];


const WeeklyTransRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_transactions.weekly_trans_range')}>
      <div dir="ltr">
        <ResponsiveContainer height={200} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} reversed={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Success" type="monotone" dataKey="success" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Declined" type="monotone" dataKey="declined" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            <Area name="reversed" type="monotone" dataKey="reversed" fill="#6722fd" stroke="#6722fd" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

WeeklyTransRange.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(WeeklyTransRange);
