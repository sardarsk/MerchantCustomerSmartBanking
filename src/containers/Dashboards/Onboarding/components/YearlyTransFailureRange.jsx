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
  name: '2021', success: 5684520, declined: 100, reversed: 3480,
},
{
  name: '2020', success: 4687520, declined: 200, reversed: 2200,
},
{
  name: '2019', success: 3655520, declined: 300, reversed: 223250,
},
{
  name: '2018', success: 3644520, declined: 250, reversed: 33400,
},
{
  name: '2017', success: 2689520, declined: 80, reversed: 13330,
},
{
  name: '2016', success: 1998520, declined: 11400, reversed: 8340,
},
{
  name: '2015', success: 499400, declined: 15400, reversed: 4330,
},
{
  name: '2014', success: 811168, declined: 45200, reversed: 24400,
},
{
  name: '2013', success: 145397, declined: 36600, reversed: 45250,
},
{
  name: '2012', success: 122480, declined: 21250, reversed: 15600,
},
{
  name: '2011', success: 244520, declined: 8033, reversed: 3410,
},
{
  name: '2010', success: 112520, declined: 13130, reversed: 4380,
},
{
  name: '2009', success: 1400, declined: 45655, reversed: 3430,
}];


const YearlyTransFailureRange = ({ rtl, themeName }) => {
  const { t } = useTranslation('common');

  return (
    <Panel lg={12} title={t('dashboard_Card_and_trans.weekly_transactions_range')}>
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

YearlyTransFailureRange.propTypes = {
  rtl: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(YearlyTransFailureRange);
