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
  name: 'Jan', success: 11590, declined: 100, reversed: 80,
},
{
  name: 'Feb', success: 13868, declined: 200, reversed: 200,
},
{
  name: 'Mar', success: 14397, declined: 300, reversed: 250,
},
{
  name: 'APr', success: 16480, declined: 250, reversed: 100,
},
{
  name: 'May', success: 15520, declined: 80, reversed: 10,
},
{
  name: 'Jun', success: 19520, declined: 130, reversed: 80,
},
{
  name: 'Jul', success: 12400, declined: 55, reversed: 30,
},
{
  name: 'Aug', success: 12397, declined: 300, reversed: 250,
},
{
  name: 'Sep', success: 16480, declined: 250, reversed: 100,
},
{
  name: 'Oct', success: 13520, declined: 80, reversed: 10,
},
{
  name: 'Nov', success: 15820, declined: 130, reversed: 80,
},
{
  name: 'Dec', success: 14500, declined: 55, reversed: 30,
}];


const MonthlyTransRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_transactions.monthly_trans_range')}>
      <div dir="ltr">
        <ResponsiveContainer height={200} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 50 }}>
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

MonthlyTransRange.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(MonthlyTransRange);
