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
  name: '2021', visa: 5684520, master: 100, others: 3480,
},
{
  name: '2020', visa: 4687520, master: 200, others: 2200,
},
{
  name: '2019', visa: 3655520, master: 300, others: 223250,
},
{
  name: '2018', visa: 3644520, master: 250, others: 33400,
},
{
  name: '2017', visa: 2689520, master: 80, others: 13330,
},
{
  name: '2016', visa: 1998520, master: 11400, others: 8340,
},
{
  name: '2015', visa: 499400, master: 15400, others: 4330,
},
{
  name: '2014', visa: 811168, master: 45200, others: 24400,
},
{
  name: '2013', visa: 145397, master: 36600, others: 45250,
},
{
  name: '2012', visa: 122480, master: 21250, others: 15600,
},
{
  name: '2011', visa: 244520, master: 8033, others: 3410,
},
{
  name: '2010', visa: 112520, master: 13130, others: 4380,
},
{
  name: '2009', visa: 1400, master: 45655, others: 3430,
}];

const NetworkWiseTransactionsYearly = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_transactions.yearly_networkwise_transtrans_range')}>
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

NetworkWiseTransactionsYearly.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(NetworkWiseTransactionsYearly);
