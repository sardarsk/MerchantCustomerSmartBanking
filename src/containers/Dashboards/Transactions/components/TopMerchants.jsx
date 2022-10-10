import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  PieChart, Pie, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import Panel from '@/shared/components/Panel';
import getTooltipStyles from '@/shared/helpers';

const data01 = [{
  id: 0, name: 'epay', value: 18934, fill: '#4ce1b6',
}, 
{
  id: 1, name: 'rbay', value: 91934, fill: '#70bbfd',
},
{
  id: 2, name: 'wishlight', value: 20432, fill: '#f6da6e',
},
{
  id: 3, name: 'Qtop', value: 18934, fill: '#4ce1b6',
}, 
{
  id: 4, name: 'witter', value: 91934, fill: '#70bbfd',
},
{
  id: 5, name: 'cashway', value: 1432, fill: '#f6da6e',
},
{
  id: 6, name: 'moneymore', value: 1894, fill: '#4ce1b6',
}, 
{
  id: 7, name: 'ashoktextile', value: 9194, fill: '#70bbfd',
},
{
  id: 8, name: 'willet', value: 2042, fill: '#f6da6e',
},
{
  id: 9, name: 'copro', value: 8432, fill: '#f6da6e',
}];

const style = (dir) => {
  const left = dir === 'ltr' ? { left: 0 } : { right: 0 };
  return ({
    ...left,
    width: 150,
    lineHeight: '24px',
    position: 'absolute',
  });
};

const renderLegend = ({ payload }) => (
  <ul className="dashboard__chart-legend">
    {payload.map(entry => (
      <li key={entry.id}><span style={{ backgroundColor: entry.color }} />{entry.value}</li>
    ))}
  </ul>
);

renderLegend.propTypes = {
  payload: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
};

const TopMerchants = ({ dir, themeName }) => {
  const { t } = useTranslation('common');
  const [coordinates, setCoordinate] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    if (e.tooltipPosition) {
      setCoordinate({ x: dir === 'ltr' ? e.tooltipPosition.x : e.tooltipPosition.x / 10, y: e.tooltipPosition.y });
    }
  };

  return (
    <Panel lg={12} xl={12} md={12} xs={12} title={t('dashboard_onboarding.top_10_merchants')}>
      <div dir={dir}>
        <ResponsiveContainer className="dashboard__chart-pie dashboard__chart-pie--topmerchant" height={400}>
          <PieChart className="dashboard__chart-pie-container">
            <Tooltip position={coordinates} {...getTooltipStyles(themeName)} />
            <Pie
              data={data01}
              dataKey="value"
              cy={180}
              innerRadius={120}
              outerRadius={150}
              label
              onMouseMove={onMouseMove}
            />
            <Legend layout="vertical" verticalAlign="bottom" wrapperStyle={style(dir)} content={renderLegend} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
};

TopMerchants.propTypes = {
  dir: PropTypes.string.isRequired,
  themeName: PropTypes.string.isRequired,
};

export default connect(state => ({ themeName: state.theme.className }))(TopMerchants);
