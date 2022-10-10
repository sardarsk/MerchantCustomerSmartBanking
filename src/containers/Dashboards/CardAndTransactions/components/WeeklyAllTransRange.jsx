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
  name: 'Mon', nonFinancial: 590, reversal: 100, financial: 1400,
},
{
  name: 'Tue', nonFinancial: 868, reversal: 200, financial: 1506,
},
{
  name: 'Wed', nonFinancial: 1397, reversal: 300, financial: 989,
},
{
  name: 'Thu', nonFinancial: 1480, reversal: 250, financial: 1228,
},
{
  name: 'Fri', nonFinancial: 1520, reversal: 80, financial: 1100,
},
{
  name: 'Sat', nonFinancial: 1520, reversal: 130, financial: 1100,
},
{
  name: 'Sun', nonFinancial: 1400, reversal: 55, financial: 1700,
}];


const WeeklyAllTransRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={6} title={t('dashboard_Card_and_trans.weekly_all_transactions_range')}>
      <div dir="ltr">
        <ResponsiveContainer height={250} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} reversed={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Non Financial" type="monotone" dataKey="financial" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Financial" type="monotone" dataKey="nonFinancial" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            <Area name="Reversals" type="monotone" dataKey="reversal" fill="#6722fd" stroke="#6722fd" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

WeeklyAllTransRange.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(WeeklyAllTransRange);
