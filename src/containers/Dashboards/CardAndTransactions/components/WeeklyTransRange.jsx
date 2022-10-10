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
  name: 'Mon', balanceEnq: 590, withdraw: 100, ministatement: 1400, pinchange: 1400, deposit: 563, transfer: 881,
},
{
  name: 'Tue', balanceEnq: 868, withdraw: 200, ministatement: 1506, pinchange: 1305, deposit: 888, transfer: 347,
},
{
  name: 'Wed', balanceEnq: 1397, withdraw: 300, ministatement: 989, pinchange: 100, deposit: 309, transfer: 664,
},
{
  name: 'Thu', balanceEnq: 1480, withdraw: 250, ministatement: 1228, pinchange: 160, deposit: 886, transfer: 220,
},
{
  name: 'Fri', balanceEnq: 1520, withdraw: 80, ministatement: 1100, pinchange: 1100, deposit: 1400, transfer: 666,
},
{
  name: 'Sat', balanceEnq: 1520, withdraw: 130, ministatement: 1100, pinchange: 777, deposit: 378, transfer: 780,
},
{
  name: 'Sun', balanceEnq: 1400, withdraw: 55, ministatement: 1700, pinchange: 346, deposit: 328, transfer: 441,
}];


const WeeklyTransRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={6} title={t('dashboard_Card_and_trans.weekly_transactions_range')}>
      <div dir="ltr">
        <ResponsiveContainer height={250} className="dashboard__area">
          <AreaChart data={data} margin={{ top: 20, left: -15, bottom: 20 }}>
            <XAxis dataKey="name" tickLine={false} reversed={rtl === 'rtl'} />
            <YAxis tickLine={false} orientation={rtl === 'rtl' ? 'right' : 'left'} />
            <Tooltip {...getTooltipStyles(themeName, 'defaultItems')} />
            <Legend />
            <CartesianGrid />
            <Area name="Balance Check" type="monotone" dataKey="balanceEnq" fill="#4ce1b6" stroke="#4ce1b6" fillOpacity={0.2} />
            <Area name="Withdraw" type="monotone" dataKey="withdraw" fill="#70bbfd" stroke="#70bbfd" fillOpacity={0.2} />
            <Area name="Ministatement" type="monotone" dataKey="ministatement" fill="#6722fd" stroke="#6722fd" fillOpacity={0.2} />
            <Area name="Pinchange" type="monotone" dataKey="pinchange" fill="#34278d" stroke="#34278d" fillOpacity={0.2} />
            <Area name="Deposit" type="monotone" dataKey="deposit" fill="#85233d" stroke="#85233d" fillOpacity={0.2} />
            <Area name="Transfer" type="monotone" dataKey="transfer" fill="#7782fd" stroke="#7782fd" fillOpacity={0.2} />

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
