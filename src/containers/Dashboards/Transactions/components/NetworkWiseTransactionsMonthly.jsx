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
  name: 'Jan', visa: 11590, master: 100, others: 80,
},
{
  name: 'Feb', visa: 13868, master: 200, others: 200,
},
{
  name: 'Mar', visa: 14397, master: 300, others: 250,
},
{
  name: 'APr', visa: 16480, master: 250, others: 100,
},
{
  name: 'May', visa: 15520, master: 80, others: 10,
},
{
  name: 'Jun', visa: 19520, master: 130, others: 80,
},
{
  name: 'Jul', visa: 12400, master: 55, others: 30,
},
{
  name: 'Aug', visa: 12397, master: 300, others: 250,
},
{
  name: 'Sep', visa: 16480, master: 250, others: 100,
},
{
  name: 'Oct', visa: 13520, master: 80, others: 10,
},
{
  name: 'Nov', visa: 15820, master: 130, others: 80,
},
{
  name: 'Dec', visa: 14500, master: 55, others: 30,
}];


const NetworkWiseTransactionsMonthly = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_transactions.monthly_networkwise_transtrans_range')}>
      <div dir="ltr">
        <ResponsiveContainer height={200} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} others={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Visa" type="monotone" dataKey="visa" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Master" type="monotone" dataKey="master" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            <Area name="Others" type="monotone" dataKey="others" fill="#6722fd" stroke="#6722fd" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

NetworkWiseTransactionsMonthly.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(NetworkWiseTransactionsMonthly);
